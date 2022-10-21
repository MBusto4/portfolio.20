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
        <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F96666]'>little</span> background </h4>
        <p className='text-base'>em Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
    </motion.div>
    </>

  )
}

export default About