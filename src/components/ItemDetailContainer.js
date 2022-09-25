import React from 'react'
import { productos } from '../app/productos'
import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
        getProducts.then((result) => {
            const productFilter = result.filter((prod) => prod.id === parseInt(productId))
            setProduct(productFilter[0])
            setLoading(false)
        })
        return () => {
            setLoading(true)
        }
    }, [productId])
    return loading ? <p>LOADING...</p> : <ItemDetail product={product} />
}

export default ItemDetailContainer