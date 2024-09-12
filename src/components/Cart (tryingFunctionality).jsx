/* eslint-disable react/jsx-key */
import { CartIcon, RemoveFromCartIcon, ClearCartIcon } from "./Icons"
import { useId, useState } from "react"
import { products } from '../mocks/products.json'
import './Cart.css'

export function Cart() {
  const cartCheckboxId = useId()
  const [cartProducts, setCartProducts] = useState([{
    id: 92,
    thumbnail: 'https://cdn.dummyjson.com/product-images/92/thumbnail.jpg',
    title: 'HOT SALE IN EUROPE electric racing motorcycle',
    price: 920,
    quantity: 1
  }])

  const addProduct = ({ id }) => {
    if (cartProducts.some(elem => elem.id === id)) return

    let product = products.find(e => e.id === id)

    setCartProducts([
      ... cartProducts,
      {
        id: product.id,
        thumbnail: product.thumbnail,
        title: product.title,
        price: product.price,
        quantity: 1
      }
    ])
  }

  const handleClearCart = () => {
    if (confirm('Sure on emptying your cart?'))
    setCartProducts([])
  }

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />

      <aside className="cart">
        <button onClick={handleClearCart} className="clear-button">
          <ClearCartIcon />
          <span> Clear Cart</span>
        </button>
        <ul>
          {
            cartProducts.length > 0 &&
            cartProducts.map((product, index) => (
              <li key={index}>
                <img src={product.thumbnail} alt={product.title} />
                <div className="cart-item-title">
                  <strong>{product.title}</strong>
                  <h4> - ${product.price}</h4>
                </div>
                <footer>
                  <button>-</button>
                  <strong> {product.quantity} </strong>
                  <button>+</button>
                  <button className="remove-button">
                    <RemoveFromCartIcon />
                  </button>
                </footer>
              </li>
            ))
          }
        </ul>
      </aside>
    </>
  )
}

/*
        <li>
            <img src="https://cdn.dummyjson.com/product-images/6/thumbnail.png" alt="macbook" />
          <div>
            <strong>Producto</strong> - $999
          </div>
          <footer>
            <button>-</button>
            <strong> 1 </strong>
            <button>+</button>
            <button className="remove-button">
              <RemoveFromCartIcon />
            </button>
          </footer>
        </li>
*/