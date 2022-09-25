import React from 'react'
import { useCartProvider } from '../app/cartProvider'

const CartWidget = () => {
    const { cantidadTotal } = useCartProvider()
    return (
        <div className='cartWidget'>
            <img src="/assets/carrito.png" alt="" />
            <p>{cantidadTotal}</p>
        </div>
    )
}

export default CartWidget