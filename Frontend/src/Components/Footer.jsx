import React from 'react'
import "../whole.css";
import Facebook from "../assets/facebook icon.jpeg";
import Instagram from "../assets/instagram icon.jpeg";
import Twitter from "../assets/twitter icon.jpeg";
import Whatsapp from "../assets/whatsapp icon.jpeg";
import { useForm } from "react-hook-form"

function Footer() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data)
  return (
    <div className='bg-black text-white sm:text-2xl mt-28'>
      <div className='sm:flex sm:py-10'>
        <div className='flex justify-center py-3 sm:w-2/6'>
          <div className='px-2 text-center'>
            <p className='pb-1'>Company</p>
            <p className='text-center'>Topic</p>
            <p className='text-center'>Topic</p>
            <p className='text-center'>Topic</p>
            <p className='text-center'>Topic</p>
          </div>
          <div className='px-2'>
            <p className='pb-1'>Company</p>
            <p className='text-center'>Topic</p>
            <p className='text-center'>Topic</p>
            <p className='text-center'>Topic</p>
            <p className='text-center'>Topic</p>
          </div>
        </div>
        <div className='flex justify-center py-2 sm:w-2/6'>
          <div className='w-10/12'>
            <div className='w-full py-1'>
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input className='w-full bg-black text-center mb-3 py-2  rounded-md border-b-2 border-white' type="email"{...register("Subscribe", { required: true, minLength:{value:13, message: "Min Length is 13"}, maxLength:{value: 35, message: "Max Length is 35"}})} placeholder='Write Email' /><br />
                {errors.Subscribe && <div className='text-red-800 text-lg'>{errors.Subscribe.message}</div>}
                <input type="submit" value="Submit" className='w-full bg-gray-800 py-1' />
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-2 sm:w-2/6'>
          <div className='w-14 px-1'><img className='w-14' src={Facebook} alt="Facebook Icon" /></div>
          <div className='w-14 px-1'><img className='w-14' src={Instagram} alt="Instagram Icon" /></div>
          <div className='w-14 px-1'><img className='w-14' src={Twitter} alt="Twitter Icon" /></div>
          <div className='w-14 px-1'><img className='w-14' src={Whatsapp} alt="Whatsapp Icon" /></div>
        </div>
      </div>
      <hr className='sm:mx-14' />
      <div className='text-center py-4'>Powered by "K&H TECH"</div>
    </div>
  )
}

export default Footer