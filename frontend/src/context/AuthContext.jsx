import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [customer, setCustomer] = useState(null)
  const [loading, setLoading] = useState(true)

  const refresh = useCallback(async () => {
    try {
      const response = await fetch('/api/customer/me', { credentials: 'same-origin' })
      const data = await response.json()
      if (response.ok && data?.authenticated && data?.customer) {
        setCustomer(data.customer)
      } else {
        setCustomer(null)
      }
    } catch (error) {
      setCustomer(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  const signup = async ({ email, password, fullName }) => {
    const response = await fetch('/api/customer/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify({
        email,
        password,
        full_name: fullName,
      }),
    })

    const data = await response.json()
    if (!response.ok) {
      throw new Error(data?.error || 'Signup failed')
    }

    setCustomer(data.customer || null)
    return data.customer || null
  }

  const login = async ({ email, password }) => {
    const response = await fetch('/api/customer/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify({ email, password }),
    })

    const data = await response.json()
    if (!response.ok) {
      throw new Error(data?.error || 'Login failed')
    }

    setCustomer(data.customer || null)
    return data.customer || null
  }

  const logout = async () => {
    try {
      await fetch('/api/customer/logout', {
        method: 'POST',
        credentials: 'same-origin',
      })
    } finally {
      setCustomer(null)
    }
  }

  const value = useMemo(() => ({
    customer,
    loading,
    isAuthenticated: !!customer,
    signup,
    login,
    logout,
    refresh,
  }), [customer, loading, refresh])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

