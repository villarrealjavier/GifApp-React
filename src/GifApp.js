import React, {useState} from 'react'
// import PropTypes from 'prop-types'
const categories=['Honda', 'Yamaha', 'Kawasaki','Ducati']
const GifApp = () => {
    const [categories, setCategories] = useState(['Honda', 'Yamaha', 'Kawasaki','Ducati']);
    const annadir=()=>{
        categories.push('Suzuki')
        setCategories([...categories])
    }
    const eliminar=()=>{
        categories.pop()
        setCategories([...categories])
    }
    const eliminarPrimero=()=>{
        categories.shift()
        setCategories([...categories])
    }
   
    return (
    <>
        <h1>GifApp</h1>
        <hr></hr>
        <ol>
            {
                categories.map((category,i)=>{
                return <li key={i}>{category}</li>
            })
            
            }
        </ol>
        <button name='annadir' onClick={annadir}>Annadir</button>
        <button name='eliminar' onClick={eliminar}>Eliminar ultimo</button>
        <button name='eliminar' onClick={eliminarPrimero}>Eliminar primero</button>


    </>
    
  )
}

export default GifApp