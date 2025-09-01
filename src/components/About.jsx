import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

const About = () => {
  let [data, setData] = useState([]) 

  let getData = () =>{
    let info = axios.get("https://dummyjson.com/product").then((response)=>{
         setData(response.data.products);
    })
  }
 useEffect(() => {
   getData()
 },[])
 

return (
   <div className='max-w-[1320px] mx-auto'>
       <div className='flex flex-wrap justify-between'>
        {data.map((item)=>( 
           <div className='w-[400px]'>
             <img src={item.thumbnail} alt="" />
             <h1>{item.id}</h1>
             <h1>{item.title}</h1>
             <h1>{item.description}</h1>
             <h1>{item.category}</h1>
             <h1>{item.price}</h1>
             <h1>{item.rating}</h1>
             <h1>{item.tags}</h1>
            
           </div>
        ))}
       </div>
   </div>
  )
}

export default About