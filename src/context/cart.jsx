/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart(prevState => ([
            ... prevState,
            {
                ... product,
                quantity: 1
            }
        ]))
    }

    const removeFromCart = (product) => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    const clearCart = () => {
        if (confirm('Sure to remove all items from your cart?')) setCart([])
    }

    const handlePlus = (product) => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        const newCart = structuredClone(cart)
        newCart[productInCartIndex].quantity += 1
        return setCart(newCart)
    }

    const handleMinus = (product) => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if (cart[productInCartIndex].quantity == 1) return

        const newCart = structuredClone(cart)
        newCart[productInCartIndex].quantity -= 1
        return setCart(newCart)
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeFromCart,
            handlePlus,
            handleMinus
        }}>
            {children}
        </CartContext.Provider>
    )
}