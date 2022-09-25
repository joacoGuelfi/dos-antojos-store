import { createContext, useContext, useState } from "react";

const cartProvider = createContext();

export const { Provider } = cartProvider;

export const useCartProvider = () => useContext(cartProvider)

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const addToCart = (product, cantidad) => {
        setCantidadTotal(cantidadTotal + cantidad)
        setTotalPrice(totalPrice + product.price * cantidad)
        if (isInCart(product.id)) {
            const newCart = cart.map((item) => {
                if (item.id === product.id) {
                    return { ...item, cantidad: item.cantidad + cantidad }
                } else {
                    return item
                }
            })
            setCart(newCart)
        } else {
            setCart([...cart, { ...product, cantidad: cantidad }])
        }
    }
    const isInCart = (id) => {
        return cart.find((product) => product.id === id)
    }
    const delItem = (item) => {
        setTotalPrice(totalPrice - item.price * item.cantidad)
        setCantidadTotal(cantidadTotal - item.cantidad)
        const newCart = cart.filter((product) => product.id !== item.id)
        setCart(newCart)
    }

    const contextValue = { cart, addToCart, cantidadTotal, totalPrice, delItem }
    return <Provider value={contextValue}>{children}</Provider>
}
export default CartProvider