import React, { useEffect, useMemo, useState } from 'react'
import { FileText, Package, Receipt, Search } from 'lucide-react'

const STATUS_CLASS = {
  pending: 'pending',
  paid: 'paid',
  processing: 'processing',
  shipped: 'shipped',
  delivered: 'delivered',
  cancelled: 'cancelled',
  refunded: 'refunded',
}

const formatCurrency = (value) => {
  const amount = Number(value || 0)
  return `$${amount.toFixed(2)}`
}

const formatDate = (isoDate) => {
  if (!isoDate) return '-'
  const date = new Date(isoDate)
  return date.toLocaleString()
}

const MyOrders = () => {
  const [email, setEmail] = useState('')
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    const queryEmail = query.get('email') || ''
    const savedEmail = localStorage.getItem('as_last_order_email') || ''
    const initialEmail = queryEmail || savedEmail
    if (initialEmail) {
      setEmail(initialEmail)
      loadOrders(initialEmail)
    }
  }, [])

  const statusSummary = useMemo(() => {
    return orders.reduce((acc, order) => {
      const key = order.status || 'pending'
      acc[key] = (acc[key] || 0) + 1
      return acc
    }, {})
  }, [orders])

  const loadOrders = async (lookupEmail = email) => {
    const normalized = lookupEmail.trim().toLowerCase()
    if (!normalized) {
      setErrorMessage('Please enter your email to view orders.')
      setOrders([])
      return
    }

    try {
      setLoading(true)
      setErrorMessage('')
      const response = await fetch(`/api/orders?email=${encodeURIComponent(normalized)}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Unable to load orders.')
      }

      setOrders(Array.isArray(data) ? data : [])
      localStorage.setItem('as_last_order_email', normalized)
    } catch (error) {
      setOrders([])
      setErrorMessage(error.message || 'Unable to load orders.')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    loadOrders()
  }

  return (
    <div className="orders-page">
      <div className="container section-padding">
        <div className="orders-header">
          <h1>My Orders</h1>
          <p>Track your order status, view order details, and download invoice or packing slip.</p>
        </div>

        <form className="order-search" onSubmit={handleSubmit}>
          <div className="search-input-wrap">
            <Search size={16} />
            <input
              type="email"
              placeholder="Enter your checkout email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>{loading ? 'Loading...' : 'View Orders'}</button>
        </form>

        {errorMessage && <p className="orders-error">{errorMessage}</p>}

        {orders.length > 0 && (
          <div className="status-grid">
            {Object.keys(STATUS_CLASS).map((status) => (
              <div key={status} className="status-card">
                <span>{status}</span>
                <strong>{statusSummary[status] || 0}</strong>
              </div>
            ))}
          </div>
        )}

        <div className="orders-list">
          {!loading && orders.length === 0 && !errorMessage && (
            <div className="empty-orders">
              <Package size={24} />
              <p>No orders found for this email yet.</p>
            </div>
          )}

          {orders.map((order) => (
            <article key={order.id} className="order-card">
              <header className="order-card-head">
                <div>
                  <p className="order-id">Order #{order.id}</p>
                  <p className="order-date">{formatDate(order.created_at)}</p>
                </div>
                <span className={`order-status ${STATUS_CLASS[order.status] || 'pending'}`}>
                  {order.status_label || order.status}
                </span>
              </header>

              <div className="order-meta">
                <p><strong>Total:</strong> {formatCurrency(order.total_amount)}</p>
                <p><strong>Payment:</strong> {order.payment_method || '-'}</p>
                <p><strong>Shipping Address:</strong> {order.shipping_address || '-'}</p>
                {(Number(order.refunded_amount || 0) > 0) && (
                  <p><strong>Refunded:</strong> {formatCurrency(order.refunded_amount)}</p>
                )}
              </div>

              <div className="order-items">
                {order.items.map((item) => (
                  <div key={item.id} className="order-item">
                    <div className="item-left">
                      <span className="item-name">{item.product || 'Product'}</span>
                      <span className="item-qty">x{item.quantity}</span>
                    </div>
                    <div className="item-right">{formatCurrency(item.line_total)}</div>
                  </div>
                ))}
              </div>

              <div className="order-actions">
                <a href={order.invoice_url} className="order-action-btn">
                  <Receipt size={16} /> Invoice PDF
                </a>
                <a href={order.packing_slip_url} className="order-action-btn outline">
                  <FileText size={16} /> Packing Slip PDF
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .orders-header h1 { font-family: var(--font-serif); font-size: 2.3rem; margin-bottom: 12px; color: var(--primary); }
        .orders-header p { color: var(--text-light); max-width: 720px; margin-bottom: 30px; }
        .order-search { display: flex; gap: 14px; margin-bottom: 28px; }
        .search-input-wrap { flex: 1; display: flex; align-items: center; gap: 10px; background: white; border: 1px solid #E7DFD7; border-radius: 999px; padding: 0 16px; }
        .search-input-wrap svg { color: var(--text-light); }
        .search-input-wrap input { width: 100%; border: none; background: transparent; padding: 14px 0; font-size: 0.95rem; color: var(--primary); }
        .search-input-wrap input:focus { outline: none; }
        .order-search button { border: none; background: var(--primary); color: white; padding: 0 22px; border-radius: 999px; font-size: 0.75rem; letter-spacing: 1px; text-transform: uppercase; cursor: pointer; }
        .order-search button:disabled { opacity: 0.7; cursor: not-allowed; }
        .orders-error { color: #b3261e; margin-bottom: 15px; font-size: 0.9rem; }
        .status-grid { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 10px; margin-bottom: 24px; }
        .status-card { background: var(--bg-creme); border: 1px solid #F0EAE5; border-radius: 8px; padding: 12px; text-align: center; }
        .status-card span { display: block; text-transform: uppercase; font-size: 0.62rem; letter-spacing: 1px; color: var(--text-light); margin-bottom: 6px; }
        .status-card strong { font-size: 1rem; color: var(--primary); }
        .orders-list { display: grid; gap: 18px; }
        .empty-orders { border: 1px dashed #D8CEC3; border-radius: 10px; padding: 40px 20px; text-align: center; color: var(--text-light); display: flex; flex-direction: column; align-items: center; gap: 12px; background: var(--bg-creme); }
        .order-card { background: white; border: 1px solid #EFE7DE; border-radius: 12px; padding: 20px; box-shadow: 0 12px 30px rgba(15, 30, 45, 0.04); }
        .order-card-head { display: flex; justify-content: space-between; gap: 16px; align-items: center; border-bottom: 1px solid #F4EEE8; padding-bottom: 14px; margin-bottom: 14px; }
        .order-id { font-size: 1.05rem; color: var(--primary); font-weight: 700; }
        .order-date { color: var(--text-light); font-size: 0.8rem; margin-top: 4px; }
        .order-status { border-radius: 999px; padding: 7px 12px; font-size: 0.67rem; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; }
        .order-status.pending { background: #fff4e8; color: #b26a00; }
        .order-status.paid { background: #e8f7ee; color: #216b3b; }
        .order-status.processing { background: #edf3ff; color: #1f4f8b; }
        .order-status.shipped { background: #e8f7fb; color: #0f6177; }
        .order-status.delivered { background: #e8f7ee; color: #1f7a44; }
        .order-status.cancelled { background: #fcecec; color: #a23939; }
        .order-status.refunded { background: #f2ecff; color: #5b37a8; }
        .order-meta { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px 20px; margin-bottom: 16px; font-size: 0.86rem; color: var(--text-light); }
        .order-meta strong { color: var(--primary); font-weight: 600; }
        .order-items { border: 1px solid #F4EEE8; border-radius: 8px; padding: 12px; background: #fffdfa; }
        .order-item { display: flex; justify-content: space-between; gap: 8px; padding: 7px 0; border-bottom: 1px solid #f4eee8; }
        .order-item:last-child { border-bottom: none; }
        .item-left { display: flex; align-items: center; gap: 8px; min-width: 0; }
        .item-name { color: var(--primary); font-size: 0.86rem; }
        .item-qty { color: var(--text-light); font-size: 0.8rem; }
        .item-right { color: var(--text-main); font-size: 0.86rem; font-weight: 600; }
        .order-actions { margin-top: 14px; display: flex; gap: 10px; flex-wrap: wrap; }
        .order-action-btn { display: inline-flex; align-items: center; gap: 7px; text-decoration: none; border: 1px solid var(--primary); background: var(--primary); color: white; border-radius: 999px; padding: 8px 14px; font-size: 0.74rem; letter-spacing: 0.8px; text-transform: uppercase; }
        .order-action-btn.outline { background: white; color: var(--primary); }
        @media (max-width: 1100px) {
          .status-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }
        @media (max-width: 768px) {
          .order-search { flex-direction: column; }
          .order-search button { padding: 13px 20px; }
          .status-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .order-meta { grid-template-columns: 1fr; }
          .order-card-head { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </div>
  )
}

export default MyOrders
