import React from 'react';
import "../whole.css";
import Model from "../assets/Model3.png";
import Model2 from "../assets/Model4.png";

function Card2() {
  return (
    <div className='sm:m-7 lg:m-12 2xl:m-20'>
      <div className='sm:m-4 lg:m-9 2xl:m-16 m-7'>
        <div className='justify-center text-center text-2xl p-6 sm:mb-10'>
          <p className='sm:p-2'>New Look</p>
          <p className=' sm:text-5xl'>New Look New Look</p>
        </div>
        <div className='sm:flex'>
          <div className='sm:w-1/2 relative '>
            <img className='w-full imground tlb shadow-2xl shadow-black' src={Model} alt='Pics' />
            <img className='w-full tlb shadow-2xl shadow-black' src={Model2} alt='Pics' />
          </div>
          <div className='sm:w-1/2 flex relative'>
            <div className='relative'>
              <div className='relative'>
                <img className='imground shadow-2xl shadow-black' src={Model} alt='Pics' />
                <img className='w-full shadow-2xl shadow-black' src={Model2} alt='Pics' />
              </div>
              <div className='relative'>
                <img className='imground shadow-2xl shadow-black' src={Model} alt='Pics' />
                <img className='w-full shadow-2xl shadow-black' src={Model2} alt='Pics' />
              </div>
            </div>
            <div className='relative'>
              <div className='relative'>
                <img className='imground tr shadow-2xl shadow-black' src={Model} alt='Pics' />
                <img className='w-full tr shadow-2xl shadow-black' src={Model2} alt='Pics' />
              </div>
              <div className='relative'>
                <img className='imground br shadow-2xl shadow-black' src={Model} alt='Pics' />
                <img className='w-full br shadow-2xl shadow-black' src={Model2} alt='Pics' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card2
