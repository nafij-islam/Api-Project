import React, { useEffect, useState } from 'react'
import axios from 'axios'

const About = () => {
  let [data, setData] = useState([])
  let [category, setCategory] = useState("all") // selected category

  let getData = () => {
    axios.get("https://dummyjson.com/products")
      .then((response) => {
        setData(response.data.products);
      })
  }
  useEffect(() => {
    getData()
  }, [])

  // filter data based on category
  let filteredData = category === "all" 
    ? data 
    : data.filter((item) => item.category === category)

  return (
    <div className='max-w-[1320px] mx-auto'>
      {/* Category Buttons */}
      <div className="flex gap-3 my-5">
        <button 
          className='px-4 py-2 bg-gray-300 rounded' 
          onClick={() => setCategory("all")}
        >
          All
        </button>
        <button 
          className='px-4 py-2 bg-gray-300 rounded' 
          onClick={() => setCategory("beauty")}
        >
          Beauty
        </button>
        <button 
          className='px-4 py-2 bg-gray-300 rounded' 
          onClick={() => setCategory("fragrances")}
        >
          Fragrances
        </button>
        <button 
          className='px-4 py-2 bg-gray-300 rounded' 
          onClick={() => setCategory("groceries")}
        >
          Groceries
        </button>
        {/* চাইলে এখানে আরো category button add করবে */}
      </div>

      {/* Product Cards */}
      <div className='flex gap-4 flex-wrap '>
        {filteredData.map((item) => (
          <div key={item.id} className='w-[400px] p-4 bg-sky-300 rounded-lg'>
            <img src={item.thumbnail} alt="" className="w-full h-[200px] object-cover rounded" />
            <h1 className='bg-red-300 inline-block px-3 py-1 rounded mt-2'>{item.id}</h1>
            <h3 className='text-[20px] font-semibold mt-2'>{item.title}</h3>
            <p className='text-sm text-gray-700'>{item.description}</p>
            <h3 className='font-medium'>Category: {item.category}</h3>
            <h3>Price: ${item.price}</h3>
            <h3>Discount: {item.discountPercentage}%</h3>
            <h3>Rating: ⭐{item.rating}</h3>
            <h3>Stock: {item.stock}</h3>
            <h3>Brand: {item.brand}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
