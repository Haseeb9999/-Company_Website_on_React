import React from 'react'
import '../whole.css';
import logo from "../assets/kmu.png";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='sm:sticky sm:top-3 sm:left-0 z-10'>
      <header className='sm:flex sm:bg-black sm:rounded-full sm:m-2 sm:px-10 sm:shadow-2xl sm:shadow-black'>
        <div className='bg-black'>
          <img className='w-10 m-auto sm:w-12 sm:ml-3 xl:w-14 2xl:w-16' src={logo} alt='KMU TEXTILE' />
        </div>
        <div className='sm:m-auto'></div>
        <div className='m-0.5 bg-black text-white rounded-full shadow-2xl shadow-black'>
          <ul className='flex justify-center'>
            <Link to="/">
              <li className='mkbdh p-1.5 xl:p-3 xl:text-xl 2xl:p-4 2xl:text-2xl'>Home</li>
            </Link>
            <Link to="/Gallery">
              <li className='mkbdh p-1.5 xl:p-3 xl:text-xl 2xl:p-4 2xl:text-2xl'>Gallery</li>
            </Link>
            <Link to="/Contact">
              <li className='mkbdh p-1.5 xl:p-3 xl:text-xl 2xl:p-4 2xl:text-2xl'>Contact</li>
            </Link>
            <Link to="/Company">
              <li className='mkbdh p-1.5 xl:p-3 xl:text-xl 2xl:p-4 2xl:text-2xl'>Company</li>
            </Link>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Navbar