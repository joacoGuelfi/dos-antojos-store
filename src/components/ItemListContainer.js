import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router'
import { getItems } from '../app/api'

const ItemListContainer = () => {
    const [fire, setFire] = useState([]);
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()


    useEffect(() => {
        getItems().then(res => {
            const productFilter = res.filter((prod) => prod.categories === categoryId)
            if (categoryId) {
                setFire(productFilter);
            } else {
                setFire(res)
            }
            setLoading(false)
            return () => {
                setLoading(true)
            }
        }, [categoryId])
    })
    return loading ? <p>loading..</p> : <ItemList products={fire} />
}

/* useEffect(() => {
             const getProducts = new Promise((resolve, reject) => {
                 setTimeout(() => {
                     resolve(productos);
                 }, 2000);
             });
             getProducts.then((result) => {
                 if (categoryId) {
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
         return loading ? <p>LOADING...</p> : <ItemList products={products} /> */





export default ItemListContainer