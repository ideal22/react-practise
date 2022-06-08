import React from 'react'

function ProductRow({ products }) {
  return (
    <>
      {products.map(({ name, price, stocked }) => (
        <div style={{ display: 'flex' }} key={name}>
          <p style={{ color: !stocked ? 'red' : '' }}>{name}</p>
          <p style={{ marginLeft: 10 }}>{price}</p>
        </div>
      ))}
    </>
  )
}

export default ProductRow
