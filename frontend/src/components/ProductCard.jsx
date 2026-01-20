import React from 'react'
import { ShoppingCart, Heart } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
      <div className="product-image-container">
        <div className="product-badges">
          {product.isNew && <span className="badge badge-new">New</span>}
          {product.isSale && <span className="badge badge-sale">Sale</span>}
        </div>
        <div className="product-placeholder" style={{ background: product.color || 'var(--primary-light)' }}>
          {product.image ? (
            <img src={product.image} alt={product.name} className="product-img-real" />
          ) : (
            <div className="placeholder-glow"></div>
          )}
        </div>
        <div className="product-actions">
          <button className="action-btn" onClick={(e) => { e.stopPropagation(); }}><Heart size={18} /></button>
          <button className="action-btn" onClick={handleAddToCart}><ShoppingCart size={18} /></button>
        </div>
      </div>
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-price">
          {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
          <span className="current-price">${product.price}</span>
        </div>
      </div>

      <style jsx="true">{`
        .product-card {
          background: var(--white);
          border-radius: 15px;
          overflow: hidden;
          transition: var(--transition);
          cursor: pointer;
          border: 1px solid rgba(0,0,0,0.03);
        }
        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.06);
        }
        .product-image-container {
          position: relative;
          aspect-ratio: 1;
          overflow: hidden;
          background: #f9f9f9;
        }
        .product-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.15;
          position: relative;
        }
        .placeholder-glow {
          width: 60%;
          height: 60%;
          background: white;
          filter: blur(20px);
          border-radius: 50%;
        }
        .product-img-real {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .product-card:hover .product-img-real {
          transform: scale(1.1);
        }
        .product-badges {
          position: absolute;
          top: 15px;
          left: 15px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          z-index: 2;
        }
        .badge {
          padding: 4px 10px;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          border-radius: 4px;
        }
        .badge-new { background: var(--primary); color: white; }
        .badge-sale { background: var(--secondary); color: var(--primary); }
        .product-actions {
          position: absolute;
          bottom: -50px;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 10px;
          padding: 15px;
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(5px);
          transition: var(--transition);
        }
        .product-card:hover .product-actions {
          bottom: 0;
        }
        .action-btn {
          width: 40px;
          height: 40px;
          background: var(--white);
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text);
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          cursor: pointer;
          transition: var(--transition);
        }
        .action-btn:hover {
          background: var(--primary);
          color: var(--white);
        }
        .product-info {
          padding: 20px;
          text-align: center;
        }
        .product-category {
          font-size: 0.75rem;
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 5px;
        }
        .product-name {
          font-size: 1.1rem;
          margin-bottom: 10px;
          font-weight: 600;
        }
        .product-price {
          display: flex;
          justify-content: center;
          gap: 10px;
          align-items: center;
        }
        .current-price {
          font-weight: 700;
          color: var(--primary);
          font-size: 1.1rem;
        }
        .old-price {
          text-decoration: line-through;
          color: var(--text-light);
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  )
}

export default ProductCard
