import React from 'react'
import{motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'


type Props = {}

function SchoolExperience({}: Props) {
  return (
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
    
    
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>School Experience</h3>
      
    <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snapm-mandatory'>
      <ExperienceCard/>
      <ExperienceCard/>
    </div>
    
    
    </motion.div>

  )
}

export default SchoolExperience