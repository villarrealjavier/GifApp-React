// import React, {useState} from 'react'
// // import PropTypes from 'prop-types'
// const categories=['Honda', 'Yamaha', 'Kawasaki','Ducati']
// const GifApp = () => {
//     const [categories, setCategories] = useState(['Honda', 'Yamaha', 'Kawasaki','Ducati']);
//     const annadir=()=>{
//         categories.push('Suzuki')
//         setCategories([...categories])
//     }
//     const eliminar=()=>{
//         categories.pop()
//         setCategories([...categories])
//     }
//     const eliminarPrimero=()=>{
//         categories.shift()
//         setCategories([...categories])
//     }
   
//     return (
//     <>
//         <h1>GifApp</h1>
//         <hr></hr>
//         <ol>
//             {
//                 categories.map((category,i)=>{
//                 return <li key={i}>{category}</li>
//             })
            
//             }
//         </ol>
//         <button name='annadir' onClick={annadir}>Annadir</button>
//         <button name='eliminar' onClick={eliminar}>Eliminar ultimo</button>
//         <button name='eliminar' onClick={eliminarPrimero}>Eliminar primero</button>


//     </>
    
//   )
// }


// export default GifApp
//LO SUYO:
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {
    // const categories = ['Honda', 'Kawasaki', 'Yamaha'];
    const [categories, setCategories] = useState(['Honda','Kawasaki']);

    // const handleAdd=()=>{
    //     // categories.push('Suzuki');
    //     console.log(categories)
    //     setCategories([ ...categories, 'Suzuki'])
    //      setCategories( cats => [ ...cats, 'Suzuki'])
    // }
  return (
    <>
        <h2>GifApp</h2>
        <hr />
        <AddCategory setCategories={setCategories}/>
        <ol>
            {
                categories.map((category) =>
                  <GifGrid
                    key={category}
                    category={category} />
                
                )
            }
        </ol>
        
    </>
  )
}
