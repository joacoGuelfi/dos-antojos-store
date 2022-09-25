import React from 'react'
import { Link } from 'react-router-dom'
import { useCartProvider } from '../app/cartProvider'

const Cart = () => {
    const { cart, delItem, cantidadTotal, totalPrice } = useCartProvider()
    const delFromCart = (item) => {
        delItem(item)
    }
    return (
        <div className='cart'>
            <h2>Este es el carrito</h2>
            {
                cart.length > 0 ? (
                    <div>
                        <ul>
                            {cart.map((item, i) => {
                                return (
                                    <li className='cartItem' key={i}>
                                        <img src={item.img} alt="" />
                                        <p>Producto: {item.name}</p>
                                        <p>Cant: {item.cantidad}</p>
                                        <p>Total: {item.price * item.cantidad}</p>
                                        <button onClick={() => delFromCart(item)}>Eliminar del carrito</button>

                                    </li>
                                )
                            })}
                            <p>Cantidad de productos en el carrito: {cantidadTotal}</p>
                            <p>Total a pagar: {totalPrice}</p>
                            <button>Terminar Compra!</button>
                        </ul>
                    </div>
                ) : (
                    <div>
                        <p>El carrito esta vacio</p>
                        <Link to="/">Agrega algo a tu carrito ya !</Link>
                    </div>
                )
            }
        </div>
    )
}

export default Cart