import React from 'react'
import { useState } from 'react'

const ItemCount = ({ onAdd }) => {
    const [cantidad, setCantidad] = useState(0)
    const sumar = () => setCantidad(cantidad + 1)
    const restar = () => setCantidad(cantidad > 0 ? cantidad - 1 : cantidad)
    return (
        <div>
            <div className='contadorBox'>
                <button onClick={restar}>-</button>

                <p>{cantidad}</p>

                <button onClick={sumar}>+</button>
            </div>
            <div>
                <button onClick={e => { onAdd(cantidad) }}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount