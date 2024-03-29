import React from 'react'
import{motion} from 'framer-motion'


type Props = {}

const jobs = [
    {
        title:'Software Engineer',
        description:'Software Engineer at Start Up',
        img:'https://rnsrentals.com/image/site-logo/1/16X9?t=1658942632',
        date:'June 2022 - Present',
        summaryPoints:[
            "Lead","React Native", "Live-stream"
        ]
    },
]

function ExperienceCard({}: Props) {
  return (
    <div>
        {jobs.map((job,i) => (
<article key={i}  className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#242424] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden '>
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
        src='https://rnsrentals.com/image/site-logo/1/16X9?t=1658942632'
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Job Title</h4>
            <p className='font-bold text-2xl mt-1 '>description of job</p>
            <div className='flex space-x-2 my-2'>
                {/* Tech Used */}
                <img className='h-10 w-10 rounded-full bg-white p-1' src="" alt="" />
                <img className='h-10 w-10 rounded-full' src="" alt="" />
                <img className='h-10 w-10 rounded-full' src="" alt="" />
                <img className='h-10 w-10 rounded-full' src="" alt="" />
            </div>

            <p className='uppercase py-5 text-gray-300'>Started Working... - Ended</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
            </ul>
        </div>
        </article>
        ))}
    </div>
       
  )
}

export default ExperienceCard