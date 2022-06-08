import React, { useState } from 'react'
import FilterableProductTable from '../components/FilterableProductTable'
import ProductCategoryRow from '../components/ProductCategoryRow'
import ProductRow from '../components/ProductRow'
import ProductTable from '../components/ProductTable'
import SearchBar from '../components/SearchBar'
import { products } from '../helpers/products'

function GoodsStock() {
  const [productsList, setProductsList] = useState(products)

  const categories = [...new Set(products.map((item) => item.category))]

  const toLower = (value) => value.toLowerCase()

  const searchProducts = (value) => {
    const filteredProducts = value
      ? productsList.filter((item) =>
          toLower(item.name).includes(toLower(value)),
        )
      : products

    setProductsList(filteredProducts)
  }

  const showProductsInStock = (isChecked) => {
    const filteredProductsByChecked = isChecked
      ? products.filter((item) => Boolean(item.stocked))
      : products
    setProductsList(filteredProductsByChecked)
  }

  return (
    <>
      <FilterableProductTable>
        <SearchBar
          searchProducts={searchProducts}
          showProductsInStock={showProductsInStock}
        />
        <ProductTable>
          {categories.map((categ) => (
            <ProductCategoryRow key={categ} category={categ}>
              <ProductRow
                products={productsList.filter(
                  ({ category }) => category === categ,
                )}
              />
            </ProductCategoryRow>
          ))}
        </ProductTable>
      </FilterableProductTable>
    </>
  )
}

export default GoodsStock
