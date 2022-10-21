import React from 'react'
import {SocialIcon} from "react-social-icons"
import {motion} from "framer-motion"

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div 
      initial={{
        x:-500,
        opacity:0,
        scale:0.5,
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.8
      }}
      className='flex flex-row items-center'>
        {/* Social Icons */}
        <SocialIcon className='mr-5' url="https://linkedin.com/in/michael-busto/" bgColor='white' fgColor='blue' />
        <SocialIcon className='mr-5' url="https://github.com/MBusto4/" bgColor='white' />
        <SocialIcon className='mr-5' url="https://upwork.com/freelancers/~01d2f8210968a5fd80" bgColor='white' fgColor='lightgreen' />
      </motion.div>

      <motion.div 
       initial={{
        x:500,
        opacity:0,
        scale:0.5,
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.2
      }}
      
      className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon 
        className='cursor-pointer'
        network="email"
        bgColor='white'
        fgColor='red'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400 ml-3'>Get In Touch!</p>
      </motion.div>
    </header>
  )
} 