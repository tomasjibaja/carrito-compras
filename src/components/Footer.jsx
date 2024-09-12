/* eslint-disable react/prop-types */
import { useCart } from '../hooks/useCart'
import './Footer.css'

export function Footer ({ filters }) {
    const { cart } = useCart()
    
    return (
        <footer className='filters-modal'>
            <span><strong>Category:</strong> {filters.category} - </span>
            <span><strong>Minimum price:</strong> ${filters.minPrice} - </span>
            <span><strong>Cart has:</strong> {cart.length} products</span>
        </footer>
    )
}