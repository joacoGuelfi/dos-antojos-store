import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import CartProvider from './cartProvider'


const Layout = () => {
    return (
        <div>
            <CartProvider>
                <NavBar />
                <Outlet />
            </CartProvider>
            <h2>Soy el footer </h2>
        </div>
    )
}

export default Layout