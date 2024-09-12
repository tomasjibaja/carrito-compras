/* eslint-disable react/prop-types */
import "./Products.css";
import { useCart } from "../hooks/useCart";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"

export function Products({ products }) {
  const { addToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = (product) => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          const isProductInCart = checkProductInCart(product)

          return (<li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <h2>{product.title}</h2>
            </div>
            <h4>${Math.round((100 * product.price) / (100 - product.discountPercentage))}</h4>
            <h3><strong>${product.price}.- </strong> {product.discountPercentage}% OFF!</h3>
            <p>{product.description}</p>
            <div>
              <button onClick={() => {
                isProductInCart
                  ? removeFromCart(product)
                  : addToCart(product)
              }}>
                {
                  isProductInCart
                    ? <><RemoveFromCartIcon /><span>Remove from cart</span></>
                    : <><AddToCartIcon /><span>Add to cart</span></>
                }
              </button>
            </div>
          </li>)
        })}
      </ul>
    </main>
  );
}
