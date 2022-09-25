import React from 'react'
import { useCartProvider } from '../app/cartProvider';
import ItemCount from './ItemCount'

const ItemDetail = ({ product }) => {
    const { addToCart } = useCartProvider();
    const onAdd = (cantidad) => {
        addToCart(product, cantidad)
    };
    return (
        <>
            <h2>Informacion detallada</h2>
            <div className='itemDetail'>
                <div className='left'>
                    <h1>{product.name}</h1>
                    <img src={product.img} alt="" />
                </div>
                <div className='detail'>
                    <p>Descripcion: {product.description}</p>
                    <p>Marca: {product.label}</p>
                    <p>Precio: ${product.price}</p>
                    <ItemCount onAdd={onAdd} />
                </div>
            </div>
        </>
    )
}

export default ItemDetail