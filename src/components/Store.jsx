import React from 'react'
import { useState, useEffect } from "react"
import { Products } from "./Products"
import { Header } from './Header'
import { Footer } from './Footer'
// import { products as initialProducts } from './mocks/products.json'
import { useFilters } from '../hooks/useFilters'
import { Cart } from "./Cart"

const Store = () => {

  const [catalog, setCatalog] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=99')
    .then(res => res.json())
    .then(res => setCatalog(res.products))

    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(res => setCategories(res))
  }, [])

  // const [products] = useState(initialProducts)
  const { filterProducts, filters } = useFilters()
  const filteredProducts = filterProducts(catalog)

  return (
    <>
      <Header categories={categories} />
      <Products products={filteredProducts} />
      <Footer filters={filters} />
      <Cart />   
    </>
  )
}

export default Store
