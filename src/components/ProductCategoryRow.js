import React from 'react'

function ProductCategoryRow({ category, children }) {
  return (
    <>
      <h4 style={{ marginBottom: 5, marginTop: 10 }}>{category}</h4>
      {children}
    </>
  )
}

export default ProductCategoryRow
