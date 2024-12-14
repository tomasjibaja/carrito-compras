import React, { useState } from 'react'
import { useCart } from "../hooks/useCart"
import { useNavigate } from 'react-router-dom'
import { IoBagCheckSharp } from "react-icons/io5";
import './Checkout.css'
import { useEffect } from 'react';

const Checkout = () => {
  const { cart, setCart } = useCart()
  const [localCart, setLocalCart] = useState(cart)
  const navigate = useNavigate()
  const [confirmed, setConfirmed] = useState(false)

  useEffect(() => {
    if (localCart.length === 0) navigate('/')
  })

  return (
    <div className='checkout'>
      <h2 className='checkout-title'>Your checkout</h2>
      <div className="checkout-items-wrapper">
        <h3>Items</h3>
          {
            localCart.length > 0 &&
            localCart.map((product) => {
              return(
                <div className='checkout-product' key={product.id}>
                  <span className='checkout-product-quantity'>{product.quantity} x</span>
                  <img className='checkout-product-image' src={product.thumbnail}/>
                  <span className='checkout-product-title'>{product.title}</span>
                  <span className='checkout-product-price'>${product.price}.-</span>
                </div>)
            })
          }
          <div className='checkout-total'>
            <span>TOTAL</span>
            <span>$
              {
                localCart.reduce((sum, current) => 
                  sum + (current.price * current.quantity), 0).toFixed(2)
              }.-
            </span>
          </div>
        {confirmed && <div className="confirm-msg">
          <IoBagCheckSharp />
          <span>Your order has been confirmed</span>
        </div> } 
        <div className="checkout-buttons">
          {confirmed ?
            <button 
              onClick={() => 
                navigate('/')}
            >Keep shopping</button> :
            <button onClick={() => navigate('/')}>Back to shop</button>
          }
          
          {!confirmed && <button onClick={() => {setConfirmed(true); setCart([])}}>Confirm</button>}
        </div>
      </div>
    </div>
  )
}

export default Checkout
