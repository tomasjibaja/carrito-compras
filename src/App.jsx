import { CartProvider } from "./context/cart"
import './App.css'
import Nav from "./components/Nav"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Store from "./components/Store"
import Checkout from "./components/Checkout"

function App() {

  return (
    <CartProvider>
      <BrowserRouter >
        <Nav />
        <Routes>
          <Route path="/" element={<Store />}/>
          <Route path="/checkout" element={<Checkout />}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    
  )
}

export default App
