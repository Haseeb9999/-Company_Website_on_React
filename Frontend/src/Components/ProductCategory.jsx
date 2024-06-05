import React from 'react'
import { Link } from 'react-router-dom'

function ProductCategory() {
  return (
    <div className='sm:mt-20'>
      <div className='list-none flex my-10 justify-center'>
        <Link to="/Men"><li className='p-2 mx-1 rounded-lg hover:shadow-2xl shadow-black bg-black text-white'>Mens's</li></Link>
        <Link to="/Women"><li className='p-2 mx-1 rounded-lg hover:shadow-2xl shadow-black bg-black text-white'>Women's</li></Link>
        <Link to="/Kids"><li className='p-2 mx-1 rounded-lg hover:shadow-2xl shadow-black bg-black text-white'>Kid's</li></Link>
        <Link to="/All"><li className='p-2 mx-1 rounded-lg hover:shadow-2xl shadow-black bg-black text-white'>All</li></Link>
      </div>
    </div>
  )
}

export default ProductCategory
