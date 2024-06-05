import React from 'react'
import Model from "../assets/Model4.png";
import Model2 from "../assets/Model3.png";

function Hero() {
  return (
    <div className='sm:py-24 px-10 sm:mb-20'>
    <div className='m-1 pt-1 sm:p-3 sm:flex'>
      <div className='sm:w-1/2 sm:pr-3 mt-2 relative'>
        <div className='sm:absolute xl:top-5 2xl:top-1/4'>
        <div className='text-center my-2'>
          <p className='text-4xl sm:text-start xl:text-6xl 2xl:text-8xl'><b>Lorem ipsum</b></p>
        </div>
        <div className='text-center sm:pr-5'>
          <p className='text-xl sm:text-start xl:text-3xl 2xl:text-5xl'><b>Lorem, ipsum dolor. Lorem ipsum dolor sit.</b></p>
        </div>
        <div className='text-center xl:pr-14'>
          <p className='sm:text-start xl:text-2xl 2xl:text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi quod iste beatae nobis. Provident necessitatibus facere odio animi autem eligendi ducimus! Est animi obcaecati ut voluptatem molestias amet quos.</p>
        </div>
        </div>
      </div>
      <div className='mt-2 sm:w-1/2 sm:float-end relative'>
        <img className='imground w-full cardradius shadow-2xl shadow-black' src={Model} alt="Banner Image" />
        <img className='cardradius w-full shadow-2xl shadow-black' src={Model2} alt="Banner Image" />
      </div>
    </div>
    </div>
  )
}

export default Hero
