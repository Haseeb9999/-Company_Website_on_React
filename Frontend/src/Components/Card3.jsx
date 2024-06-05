import React from 'react';
import "../whole.css";
import Model from "../assets/Model3.png";
import Model2 from "../assets/Model4.png";


function Card3() {
    return (
        <div className='sm:m-10 lg:m-20'>
            <div className='sm:py-10 m-2'>
                <div className=''>
                    <p className='text-xl'>New Tranding Look</p>
                </div>
                <div className=''>
                    <p className='text-3xl'>New Tranding Look</p>
                </div>
            </div>
            <div className='sm:flex'>
                <div className='m-2 relative sm:w-1/3'>
                    <img className='imground cardradius w-full shadow-2xl shadow-black' src={Model} alt='' />
                    <img className='cardradius w-full shadow-2xl shadow-black' src={Model2} alt='' />
                    </div>
                <div className='m-2 relative sm:w-1/3'>
                    <img className='imground cardradius w-full shadow-2xl shadow-black' src={Model} alt='' />
                    <img className='cardradius w-full shadow-2xl shadow-black' src={Model2} alt='' />
                    </div>
                <div className='m-2 relative sm:w-1/3'>
                    <img className='imground cardradius w-full shadow-2xl shadow-black' src={Model} alt='' />
                    <img className='cardradius w-full shadow-2xl shadow-black' src={Model2} alt='' />
                    </div>
            </div>
        </div>
    )
}

export default Card3