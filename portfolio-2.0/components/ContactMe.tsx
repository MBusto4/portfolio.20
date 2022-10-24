import React from 'react'
import {PhoneIcon ,MapPinIcon,EnvelopeIcon} from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";



type Props = {}

type FormValues = {
  name: string;
  email: string;
  subject:string;
  message: string;
};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = formData => {
    window.location.href = `mailto:mikebusto4@gmail.com?subject=${formData.subject}&body=Hi, My name is ${formData.name}. ${formData.message}`
  };


  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto justify-evenly items-center '>  
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>Contact</h3>


        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'> <span className='underline decoration-[#F96666]/40'>Need a Developer ?{" "}</span> Lets talk.</h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#F96666] h-7 w-7 animate-pulse'/>
                <p>Mikebusto4@gmail.com</p>
                </div>

            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput'/>
                    <button className='bg-[#F96666] py-5 px-10 rounded-r-md text-[#242424] font-bold text-lg' type="submit">Submit</button>
            </form>

        </div>
    </div>
  )
}

export default ContactMe