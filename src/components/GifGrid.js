import React, { useState, useEffect } from 'react'

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GrifGridItem';


export const GifGrid = ({ category }) => {

    //const [images, setImages] = useState([]);

    const {data:images, loading} = useFetchGifs(category);
    // useEffect( ()=>{
    //     getGifs(category)
    //     .then( setImages)
    // },[])
    // const getGifs = async () => {

    //     const url = `https://api.giphy.com/v1/gifs/search?api_key=jc97OEt33W0eXvGQ9OxkdxT2F8WDnzXq&q=${encodeURI(category)}&limit=10&offset=0&rating=g&lang=en`;
    //     const resp = await fetch(url);
    //     const { data } = await resp.json();
    //     const gifs = data.map(img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images.downsized_medium.url
    //         }
    //     })
    //     setImages(gifs)
    //     console.log(gifs)

        
        
    // }
         
    
    // getGifs()
        

    return (
        <>
            <h3> {category} </h3>
            
            { loading && <span class="loader"></span>}
            <div className='card-grid'>
                                {
                    images.map((img) =>
                        <GifGridItem
                                    key={img.id}
                                    {...img}/>
                    )
                }
                
            </div>
        </>

    )
}




// import React, { useState } from 'react'


// export const GifGrid = ({category}) => {
//     const [images,setImages] = useState([])

//     const getGifs =async()=>{
//         const url = 'https://api.giphy.com/v1/gifs/search?api_key=77YwviK3xR96OBJD23QtoJSTWYvI3f2q&q=iron+man&limit=10&offset=0&rating=g&lang=en'
//         const resp = await fetch(url);
//         const {data} = await resp.json()
//         const gifs = data.map(img=>{
//             return{
//                 id: img.id,
//                 title:img.title,
//                 url:img.images.downsized_medium.url
//             }
//         })
//         return gifs
//     }
//     getGifs().then((imgs)=> setImages(imgs))
    
//   return (
//     <div>
//         <h3> {category} </h3>
//         {
//             images.map((img)=>  <img src={img.url} alt={img.title} key={img.id}/>
//             )
//         }
     
        
        
        
//     </div>
//   )
// }
