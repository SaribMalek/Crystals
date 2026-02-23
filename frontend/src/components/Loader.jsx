import React from 'react'

const Loader = () => {
  return (
    <div className="page-loader" role="status" aria-live="polite" aria-label="Loading page">
      <div className="page-loader__spinner" />
      <p className="page-loader__text">Loading...</p>
    </div>
  )
}

export default Loader
