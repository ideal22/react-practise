import React, { useState } from 'react'

function SearchBar({ searchProducts, showProductsInStock }) {
  const [value, setValue] = useState('')
  const [isChecked, setIschecked] = useState(false)

  const onChangeHandler = (e) => {
    const { value } = e.target
    setValue(value)
    searchProducts(value)
  }

  const onCheckedHandler = (e) => {
    const { checked } = e.target
    setIschecked(checked)
    showProductsInStock(checked)
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChangeHandler}
      />
      <label style={{ display: 'block', marginTop: 5 }}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onCheckedHandler}
        />
        Only show products in Stock
      </label>
    </div>
  )
}

export default SearchBar
