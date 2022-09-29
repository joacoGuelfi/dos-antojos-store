import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import { useCartProvider } from '../app/cartProvider'


const NavBar = () => {
    const { cantidadTotal } = useCartProvider()
    return (
        <div className='navBar'>
            <img src="/assets/logo.png" alt="" />
            <ul className='navBarUL'>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/categorias/camisa">Camisas</Link>
                <Link className='link' to="/categorias/remera">Remeras</Link>
                <Link className='link' to="/categorias/pantalon">Pantalones</Link>
                <Link className='link' to="/categorias/abrigo">Abrigos</Link>
                {
                    cantidadTotal > 0 ? (
                        <Link className='link' to="/cart"><CartWidget /></Link>
                    ) : (
                        <p></p>
                    )

                }
                <Link className='link' to="/createProduct">Add Item</Link>
            </ul>
        </div >
    )
}

export default NavBar