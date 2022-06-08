import React from 'react'

function FilterableProductTable({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      {children}
    </div>
  )
}

export default FilterableProductTable
