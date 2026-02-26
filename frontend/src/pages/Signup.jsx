import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Signup = () => {
  const { signup } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const redirectTo = new URLSearchParams(location.search).get('redirect') || '/shop'

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setErrorMessage('')

    try {
      await signup({
        fullName: fullName.trim(),
        email: email.trim(),
        password,
      })
      navigate(`/login?registered=1&redirect=${encodeURIComponent(redirectTo)}`)
    } catch (error) {
      setErrorMessage(error.message || 'Unable to signup.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="container section-padding">
        <div className="auth-card">
          <h1>Create Account</h1>
          <p>Sign up before checkout so your orders stay connected to your account.</p>
          <form onSubmit={handleSubmit} className="auth-form">
            <label>Full Name</label>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} required />
            {errorMessage && <p className="auth-error">{errorMessage}</p>}
            <button type="submit" className="btn-luxury" disabled={submitting}>
              {submitting ? 'Please wait...' : 'Create Account'}
            </button>
          </form>
          <p className="auth-link-row">
            Already registered? <Link to={`/login?redirect=${encodeURIComponent(redirectTo)}`}>Login</Link>
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
        .auth-link-row { margin-top: 16px; margin-bottom: 0; font-size: 0.9rem; }
        .auth-link-row a { color: var(--primary); text-decoration: underline; }
      `}</style>
    </div>
  )
}

export default Signup
