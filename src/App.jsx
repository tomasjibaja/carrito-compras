import { useState, useEffect } from "react"
import { Products } from "./components/Products"
import { Header } from './components/Header'
import { Footer } from './components/Footer'
// import { products as initialProducts } from './mocks/products.json'
import { useFilters } from './hooks/useFilters'
import { Cart } from "./components/Cart"
import { CartProvider } from "./context/cart"
import './App.css'
import Nav from "./components/Nav"


function App() {

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
    <CartProvider>
      <Nav />
      <Header categories={categories} />
      <Products products={filteredProducts} />
      <Footer filters={filters} />
      <Cart />
    </CartProvider>
    
  )
}

export default App
