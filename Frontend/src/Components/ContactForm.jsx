import React from 'react'
import AddressIcon from "../assets/Address_Icon.png";
import PhoneNo from "../assets/Phone_No_Icon.png";
import EmailIcon from "../assets/Email_Icon.png";
import WebIcon from "../assets/Web_Icon.png";
import { useForm } from "react-hook-form"

function ContactForm() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const submitform = () => {
    alert("Your form is submit successfully");
    console.log("Your form is submit successfully");
  }

  return (
    <>
      <div className='my-14 sm:my-28 lg:text-lg xl:text-xl 2xl:text-2xl'>
        <div className='sm:w-4/5 m-auto sm:flex'>
          <div className='p-5 sm:py-24 sm:px-24 bg-black text-white sm:w-1/2 m-auto'>
            <div className=''>
              <div className='text-center'>Send us a Message</div>
              <div className='sm:w-11/12 m-auto'>
                <form action="" onSubmit={handleSubmit(onSubmit)} className='m-auto'>
                  <label htmlFor="Name">Name</label><br />
                  <input type="text" {...register("Name", { 
                    // required: true,
                     minLength: { value: 3, message: "Min Length is 3" }, maxLength: { value: 20, message: "Max Length is 20" } })} placeholder='Name' className='bg-black w-full rounded-md border-b-2 border-white pl-2' /><br /><br />
                  {errors.Name && <div className='text-red-800 text-lg'>{errors.Name.message}</div>}
                  <label htmlFor="Phome Number">Phome Number</label><br />
                  <input type="number" {...register("PhoneNo", { 
                    // required: true,
                     minLength: { value: 11, message: "Min Length is 11" }, maxLength: { value: 12, message: "Max Length is 12" } })} placeholder='Phone Number' className='bg-black w-full rounded-md border-b-2 border-white pl-2' /><br /><br />
                  {errors.PhoneNo && <div className='text-red-800 text-lg'>{errors.PhoneNo.message}</div>}
                  <label htmlFor="Email">Email</label><br />
                  <input type="email" {...register("Email", { 
                    // required: true,
                     minLength: { value: 13, message: "Min Length is 13" }, maxLength: { value: 35, message: "Max Length is 35" } })} placeholder='Email' className='bg-black rounded-md w-full border-b-2 border-white pl-2' /><br /><br />
                  {errors.Email && <div className='text-red-800 text-lg'>There is some error in Email</div>}
                  <label htmlFor="Message">Message</label><br />
                  <textarea {...register("Message", { required: { 
                    // value: true,
                     message: "This field is required" } })} placeholder='Message' className='bg-black rounded-md border-b-2 w-full border-white pl-2'></textarea><br /><br />
                  {errors.Message && <div className='text-red-800 text-lg'>{errors.Message.message}</div>}
                  <input onClick={submitform} disabled={isSubmitting} type="submit" value="Submit" className='bg-white text-black py-1 px-7 rounded-md' />
                </form>
              </div>
            </div>
          </div>
          <div className='bg-slate-500 sm:w-1/2 flex justify-center align-middle'>
            <div className='w-4/5 m-auto'>
              <div className=''>
                <div className=''>
                  <div className='sm:text-3xl'>Contact Us</div>
                  <div className='pb-3 sm:text-sm lg:text-lg 2xl:text-xl'>We're open for any suggetion or just to have a chat.</div>
                </div>
              </div>
              <div>
                <div className='flex sm:py-2 lg:py-3 xl:py-4 2xl:py-5'>
                  <div className='w-8 sm:w-10 lg:w-12 2xl:w-14'><img src={AddressIcon} alt="Address Icon" className='rounded-full shadow-md shadow-black' /></div>
                  <div className='sm:text-sm lg:text-xl 2xl:text-2xl pl-2'>Address :gali no<br />420 Cowmandi</div>
                </div>
                <div className='flex sm:py-2 lg:py-3 xl:py-4 2xl:py-5'>
                  <div className='w-8 sm:w-10 lg:w-12 2xl:w-14'><img src={PhoneNo} alt="Phone No Icon" className='rounded-full shadow-md shadow-black' /></div>
                  <div className='sm:text-sm lg:text-xl 2xl:text-2xl pl-2'>03102010500</div>
                </div>
                <div className='flex sm:py-2 lg:py-3 xl:py-4 2xl:py-5'>
                  <div className='w-8 sm:w-10 lg:w-12 2xl:w-14'><img src={EmailIcon} alt="Email_Icon" className='rounded-full shadow-md shadow-black' /></div>
                  <div className='sm:text-sm lg:text-xl 2xl:text-2xl pl-2'>kabbatkaroga<br />@gmail.com</div>
                </div>
                <div className='flex sm:py-2 lg:py-3 xl:py-4 2xl:py-5'>
                  <div className='w-8 sm:w-10 lg:w-12 2xl:w-14'><img src={WebIcon} alt="Web_Icon" className='rounded-full shadow-md shadow-black' /></div>
                  <div className='sm:text-sm lg:text-xl 2xl:text-2xl pl-2'>Chal-Tatari.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm