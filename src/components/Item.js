import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    return (
        <div className='item'>
            <h2>{product.name}</h2>
            <p>{product.label}</p>
            <img src={product.img} alt="" />
            <p>${product.price}</p>
            <Link to={`/producto/${product.id}`}>Ver detalle</Link>
        </div >
    )
}

export default Item