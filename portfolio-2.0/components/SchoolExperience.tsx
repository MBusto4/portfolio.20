import React from 'react'
import{motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'


type Props = {}

const schools = [
    {
        title:'Fullstack Academy',
        description:'Software Engineering Student',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlgW5utjhXj3WxIbVP_8OzcsjNQ-NAChLOdkFFo1E9pAxjkgFrPB1K99mq6Tq6GexV6Jo&usqp=CAU',
        date:'August 2020 - April 2021',
        summaryPoints:[
            "17-Week Full Stack JavaScript Web Development Immersive",
            "React & Redux",
            "Certificate in Software Engineering for 500+ hours",
            'Top ranked coding bootcamp in NYC',
            'Project based curriculum'
        ]
    },
        {
        title:'Brookdale Community College' ,
        description:`Associate's Degree in Computer Science`,
        // img:'https://rnsrentals.com/image/site-logo/1/16X9?t=1658942632',
        img:'https://yt3.ggpht.com/ytc/AMLnZu9oAo-CHdlqy-hM9lFMZLoGZHZ9AzCGwI09v8RS6Q=s900-c-k-c0x00ffffff-no-rj',
        date:'September 2015 - May 2018',
        summaryPoints:[
            'Java', 'Machine Language', 'Statistics', 'System Design', 'Calculus'
        ]
    },
            {
        title:'Udemy' ,
        description:`Data Structures and Algorithms`,
        // img:'https://rnsrentals.com/image/site-logo/1/16X9?t=1658942632',
        img:'https://logos-world.net/wp-content/uploads/2021/11/Udemy-Logo.png',
        date:'May 2020 - July 2020',
        summaryPoints:[
            'Learn different data structures that can be used to store data',
             'Learn and implement basic algorithms such as searching and sorting on different data structures', 
             'Build on your algorithm skills by learning more advanced algorithms such as brute-force greedy algorithms, graph algorithms.',
             'Dynamic Programming',
             'Recursion'
        ]
    },
]

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
      
    <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
      {/* <ExperienceCard/>
      <ExperienceCard/> */}
      {schools.map((school)=> (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#242424] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden '>
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
        src={school.img}
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>{school.title}</h4>
            <p className='font-bold text-2xl mt-1 '>{school.description}</p>
            <p className='uppercase py-5 text-gray-300'>{school.date}</p>
              {school.summaryPoints.map((point)=> (
            <ul className='list-disc space-y-4 ml-5 text-lg'>
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

export default SchoolExperience