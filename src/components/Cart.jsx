/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { CartIcon, RemoveFromCartIcon, ClearCartIcon } from "./Icons"
import { useId } from "react"
import './Cart.css'
import { useCart } from "../hooks/useCart"
import { useNavigate } from 'react-router-dom'
import { IoBagCheckOutline } from "react-icons/io5";


function CartItem ({ product, removeFromCart, handlePlus, handleMinus }) {
  return (
    <li>
      <img src={product.thumbnail} alt={product.title} />
      <div className="cart-item-title">
        <strong>{product.title}</strong>
        <h4> - ${product.price}</h4>
      </div>
      <footer>
        <button onClick={() => handleMinus(product)}>-</button>
        <strong> {product.quantity} </strong>
        <button onClick={() => handlePlus(product)}>+</button>
        <button onClick={() => removeFromCart(product)} className="remove-button">
          <RemoveFromCartIcon />
        </button>
      </footer>
    </li>
  )
}

export function Cart() {
  const cartCheckboxId = useId()
  const { cart, clearCart, removeFromCart, handlePlus, handleMinus } = useCart()
  const navigate = useNavigate()

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />

      <aside className="cart">
        <h2 className="cart-title">Your Cart</h2>
        {cart.length > 0 &&
          <div className="cart-buttons">
            <button onClick={clearCart} className="clear-button">
              <ClearCartIcon />
              <span>Clear Cart</span>
            </button>
            <button onClick={() => navigate('/checkout')} className="checkout-button">
              <IoBagCheckOutline />
              <span>Checkout</span>
            </button>
          </div>}
        <ul>
          {
            cart.length > 0 &&
            cart.map((product) => (
              <CartItem key={product.id} product={product} removeFromCart={removeFromCart} handleMinus={handleMinus} handlePlus={handlePlus} />
            ))
          }
        </ul>
      </aside>
    </>
  )
}