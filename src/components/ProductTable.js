import React from 'react'

function ProductTable({ children }) {
  return (
    <div>
      <div style={{ display: 'flex', marginBottom: 5 }}>
        <h4>Name: </h4>
        <h4 style={{ marginLeft: 20 }}>Price</h4>
      </div>
      {children}
    </div>
  )
}

export default ProductTable
