import React from 'react';
import '../whole.css';
import Model from "../assets/Model4.png";
import Model2 from "../assets/Model3.png";

function Card() {
  return (
    <div id='cardHeight' className='flex'>
    <div className='sm:w-full'>
      <div className='text-center'>
        <p className='p-7 text-3xl'>Some Images</p>
      </div>
      <div className='mt-10 sm:flex sm:w-full'>
        <div className='relative sm:w-full'>
          <img className='sm:w-full imground shadow-2xl shadow-black' src={Model} alt="Something Went Wrong" />
          <img className='sm:w-full shadow-2xl shadow-black' src={Model2} alt="Something Went Wrong" />
          <p className='absolute bottom-3 sm:bottom-10 sm:left-16 sm:text-5xl text-white'>Model Pic</p>
        </div>
        <div className='relative sm:w-full'>
          <img className='sm:w-full imground shadow-2xl shadow-black' src={Model} alt="Something Went Wrong" />
          <img className='sm:w-full shadow-2xl shadow-black' src={Model2} alt="Something Went Wrong" />
          <p className='absolute bottom-3 sm:bottom-10 sm:left-16 sm:text-5xl text text-white'>Model Pic</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card