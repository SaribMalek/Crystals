import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const search = new URLSearchParams(location.search)
  const redirectTo = search.get('redirect') || '/shop'
  const registered = search.get('registered') === '1'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setErrorMessage('')

    try {
      await login({ email: email.trim(), password })
      navigate(redirectTo)
    } catch (error) {
      setErrorMessage(error.message || 'Unable to login.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="container section-padding">
        <div className="auth-card">
          <h1>Login</h1>
          <p>Login to continue checkout and manage your orders.</p>
          {registered && <p className="auth-success">Registration successful. Please login.</p>}
          <form onSubmit={handleSubmit} className="auth-form">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            {errorMessage && <p className="auth-error">{errorMessage}</p>}
            <button type="submit" className="btn-luxury" disabled={submitting}>
              {submitting ? 'Please wait...' : 'Login'}
            </button>
          </form>
          <p className="auth-link-row">
            New here? <Link to={`/signup?redirect=${encodeURIComponent(redirectTo)}`}>Create an account</Link>
          </p>
        </div>
      </div>
      <style jsx="true">{`
        .auth-page { min-height: 65vh; }
        .auth-card { max-width: 520px; margin: 0 auto; background: #fff; border: 1px solid #efe7de; border-radius: 12px; padding: 36px; }
        .auth-card h1 { font-family: var(--font-serif); color: var(--primary); margin-bottom: 8px; }
        .auth-card p { color: var(--text-light); margin-bottom: 18px; }
        .auth-form { display: grid; gap: 12px; }
        .auth-form label { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-light); }
        .auth-form input { border: 1px solid #e7dfd7; border-radius: 8px; padding: 12px 14px; font-size: 0.95rem; color: var(--primary); }
        .auth-form input:focus { outline: none; border-color: var(--secondary); }
        .auth-error { color: #b3261e; margin: 6px 0; font-size: 0.86rem; }
        .auth-success { color: #1d6a3d; margin-bottom: 14px; font-size: 0.9rem; }
        .auth-link-row { margin-top: 16px; margin-bottom: 0; font-size: 0.9rem; }
        .auth-link-row a { color: var(--primary); text-decoration: underline; }
      `}</style>
    </div>
  )
}

export default Login
