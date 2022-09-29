import React from 'react'
import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router'
import { getItemById } from '../app/api'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        getItemById(productId).then((res) => {
            setProduct(res)
            setLoading(false)
        })
        return () => {
            setLoading(true)
        }
    }, [productId])
    return loading ? <p>LOADING...</p> : <ItemDetail product={product} />
}

export default ItemDetailContainer