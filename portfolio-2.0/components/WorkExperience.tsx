import React from 'react'
import{motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'


type Props = {}

const jobs = [
    {
        title:'RIP-it',
        description:'Software Engineer at Start Up.',
        img:'http://www.cheapbats.com/uploads/commerce/images/manufacturers/RipIt.jpg',
        date:'June 2022 - Present',
        summaryPoints:[
            "Lead Software Engineer at RIP-it",
            "Responsible for leading all front-end development for both iOS and Android applications built using React Native",
            "Utilized crucial software design skills to create the initial flows for the system",
            "Work cross functionally with back-end engineer to design a mobile optimized API"
        ]
    },
        {
        title:'RNS Rentals' ,
        description:'Freelance developer hired for features.',
        img:'https://rnsrentals.com/image/site-logo/1/16X9?t=1658942632',
        date:'October 2021 - May 2022',
        summaryPoints:[
            "Responsible for designing and developing the front-end car rental website used by customers as well as the Admin Portal used by employees",
            "Worked closely with Product Designer to build out functionality for major parts of the using facing website",
            "Check-out and pay using Stripe",
            "Car inventory screen"
        ]
    },
]

function WorkExperience({}: Props) {
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
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>Work Experience</h3>
      
    <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
      {/* <ExperienceCard/>
      <ExperienceCard/> */}
      {jobs.map((job,i)=> (
        <article key={i} className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#242424] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden '>
     <motion.img
            initial={{
                y:-100,
                opacity:0
            }}
            transition={{
                duration:1.2
            }}
            whileInView={{ opacity:1,y:0

            }}

            className='w-32 h-32 rounded-full object-center xl:w-[200px] xl:h-[200px] object-contain bg-white p-2'
        src={job.img}
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>{job.title}</h4>
            <p className='font-bold text-2xl mt-1 '>{job.description}</p>
            {/* <div className='flex space-x-2 my-2'>
                <img className='h-10 w-10 rounded-full bg-white p-1' src="" alt="" />
                <img className='h-10 w-10 rounded-full' src="" alt="" />
                <img className='h-10 w-10 rounded-full' src="" alt="" />
                <img className='h-10 w-10 rounded-full' src="" alt="" />
            </div> */}

            <p className='uppercase py-5 text-gray-300'>{job.date}</p>
              {job.summaryPoints.map((point,j)=> (
            <ul key={j} className='list-disc space-y-4 ml-5 text-lg'>
                <li>{point}</li>
            </ul>
              ))}
        </div>
        </article>
      ))}
    </div>
    
    
    </motion.div>

  )
}

export default WorkExperience