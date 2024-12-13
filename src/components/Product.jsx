import React from 'react'
import "./Products.css";
import { useCart } from "../hooks/useCart";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"
import { useState } from "react";
import SilderModal from "./SilderModal";

const Product = ({ product }) => {

  const { addToCart, removeFromCart, cart } = useCart();
  const [showImages, setShowImages] = useState(false);

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  }

  const isProductInCart = checkProductInCart(product);

  return (
    <>
      <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} onClick={() => setShowImages(true)} />
              <div>
                <h2>{product.title}</h2>
              </div>
              <h4>
                $
                {Math.round(
                  (100 * product.price) / (100 - product.discountPercentage)
                )}
              </h4>
              <h3>
                <strong>${product.price}.- </strong>{" "}
                {product.discountPercentage}% OFF!
              </h3>
              <p>{product.description}</p>
              <div>
                <button
                  className={`${!isProductInCart && "add-button"}`}
                  onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product);
                  }}
                >
                  {isProductInCart ? (
                    <>
                      <RemoveFromCartIcon />
                      <span className="remove-button">Remove from cart</span>
                    </>
                  ) : (
                    <>
                      <AddToCartIcon />
                      <span>Add to cart</span>
                    </>
                  )}
                </button>
              </div>
            </li>
            {showImages && <SilderModal product={product} setShowImages={setShowImages} />}
    </>
  )
}

export default Product
