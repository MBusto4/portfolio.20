import React from 'react'
import {SocialIcon} from "react-social-icons"

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start mt-3 justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <div className='flex flex-row items-center'>
        {/* Social Icons */}
        <SocialIcon className='mr-5' url="https://linkedin.com/in/michael-busto/" />
        <SocialIcon className='mr-5' url="https://github.com/MBusto4/" />
        <SocialIcon className='mr-5' url="https://upwork.com/freelancers/~01d2f8210968a5fd80" />
      </div>

      <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon 
        className='cursor-pointer'
        network="email"
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400 ml-3'>Get In Touch!</p>
      </div>
    </header>
  )
} 