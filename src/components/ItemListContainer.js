import React from 'react'
import { productos } from '../app/productos'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });
        getProducts.then((result) => {
            if (categoryId) {
                const productFilter = result.filter((prod) => prod.categories === categoryId)
                setProducts(productFilter);
            } else {
                setProducts(result)
            }
            setLoading(false)
        });
        return () => {
            setLoading(true)
        }
    }, [categoryId]);
    return loading ? <p>LOADING...</p> : <ItemList products={products} />
}

export default ItemListContainer