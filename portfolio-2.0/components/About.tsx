import React from 'react'
import{motion} from 'framer-motion'
type Props = {}

function About({}: Props) {
  return (
    <>
    <motion.div 
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:1.5
    }}

    className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>About</h3>

    <motion.img
    initial={{
        x:-200,
        opacity:0
    }}
    whileInView={{
        x:0,
        opacity:1
    }}
    transition={{
        duration:1.2
    }}
    // viewport={{once:true}}
            src='https://scontent.fewr1-6.fna.fbcdn.net/v/t39.30808-6/310041924_6342817565745267_5847666273196783069_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=eOPLyOzxFH8AX9BVdjK&_nc_ht=scontent.fewr1-6.fna&oh=00_AT-KFGgbKmO9YZ54QPBev81MTc8vR_vND7Nh4tUjXTI_LA&oe=635892D1' alt=""
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
    />
    <div className='space-y-10 px-0 md:px-10 '> 
    <div className='flex items-center justify-center'>
        <h4 className='text-4xl font-semibold'>Background </h4>
    </div>
        <p className='text-lg'>Why challenge yourself? I believe you need to challenge yourself in order to grow as a person and meet goals you have set out for yourself to get where you want to be in life. That's what brought me to coding. What started out as a challenge to myself, turned into a passion.</p>
        </div>
    </motion.div>
    </>

  )
}

export default About