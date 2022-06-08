export const filterProductByCategory = (products) => {
  let hash = {}

  products.forEach((product) => {
    if (!hash.hasOwnProperty(product.category)) {
      hash[product.category] = []
    }

    Object.keys(hash).forEach((category) => {
      if (category !== product.category) return
      hash[category].push(product)
    })
  })

  return hash
}
