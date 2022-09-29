import React from 'react'
import { useState } from 'react'
import { createItem } from '../app/api'

const AddProducts = () => {
    const [price, setPrice] = useState(0)
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [categorie, setCategorie] = useState()
    const [label, setLabel] = useState()
    const [image, setImage] = useState()
    const [idP, setIdP] = useState(0)

    return (
        <div>
            <h1>Add Products</h1>
            <form >
                <input type="text" onChange={e => setName(e.target.value)} placeholder="Ingrese el nombre del producto" />
                <input type="number" onChange={e => setPrice(e.target.value)} placeholder="Ingrese el valor del producto" />
                <input type="text" onChange={e => setLabel(e.target.value)} placeholder="Ingrese el marca del producto" />
                <input type="text" onChange={e => setDescription(e.target.value)} placeholder="Ingrese la descripcion del producto" />
                <input type="text" onChange={e => setCategorie(e.target.value)} placeholder="Ingrese la categoria del producto" />
                <input type="text" onChange={e => setImage(e.target.value)} placeholder="Ingrese la ruta de la imagen del producto" />
                <input type="number" onChange={e => setIdP(e.target.value)} placeholder="Ingrese eñ ID del producto" />
                <button type='reset' onClick={() => {
                    createItem({ idP: idP, name: name, price: price, label: label, description: description, categorie: categorie, image: image })
                }}>Crear producto</button>
            </form>
        </div>
    )
}

export default AddProducts