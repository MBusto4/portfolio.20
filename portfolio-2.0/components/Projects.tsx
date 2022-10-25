import React from 'react'
import{motion} from 'framer-motion'
 import ReactLogo from '../public/logos/react-logo.png'
import Link from 'next/link'

type Props = {}
const react =  "https://ionicframework.com/docs/icons/logo-react-icon.png"
const firebase ='https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-vertical.png'
const node ='https://cdn-icons-png.flaticon.com/512/919/919825.png'
const bootstrap ='https://firebasestorage.googleapis.com/v0/b/interviewprep-fsa.appspot.com/o/static%2Fbootstrap.gif?alt=media&token=3d117af5-4497-4604-9b4f-3d4ec43ae14d'
const faceApi ='https://firebasestorage.googleapis.com/v0/b/interviewprep-fsa.appspot.com/o/static%2Fface-api.png?alt=media&token=f6921285-b6b1-4e82-a20b-681ebacba404'
const webspeech ='https://firebasestorage.googleapis.com/v0/b/interviewprep-fsa.appspot.com/o/static%2Fwebspeech.png?alt=media&token=a62db28c-a4ea-4756-b8c5-77815fcfdcf6'
const redux ='https://e7.pngegg.com/pngimages/669/447/png-clipart-redux-react-javascript-freecodecamp-npm-others-miscellaneous-purple-thumbnail.png'
const postgres = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png'
const cloudinary ='https://www.gartner.com/imagesrv/peer-insights/vendors/logos/cloudinary.png'
const materialUi ='data:image/png;base64,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'

function Projects({}: Props) {
    const projects = [

    {
        img:'https://michaelbusto.net/images/Outerview.jpeg',
        name:'OuterView',
        desc:'With just your webcam, our application can help identify commonly used filler words in conjunction with detectable facial emotions to create a cohesive score to improve your everyday public speaking.',
        tech:[react,firebase,node,bootstrap,faceApi,webspeech],
        url:'https://github.com/2101capstone/OuterView',
        website:'outerview.xyz'
    },
        {
        img:'https://michaelbusto.net/images/my-messenger.png',
        name:'My Messenger App',
        desc:`This project is a fully functioning messaging Application with the ability to send messages to different users and even the ability to send images to one another using Cloudinary!`,
        tech:[react,redux,materialUi,cloudinary,postgres],
        url:'https://github.com/MBusto4/myMessenger'
    },
    ]
  return (
    <motion.div
        initial={{
        opacity:0
    }}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>Projects</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {/* Projects */}
            {projects.map((project,i) => (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen mt-24'>
                    <motion.img 
                        initial={{
                            y:-300,
                        opacity:0
                     }}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1.2}}
                    
                    className='xl:max-w-2xl' src={project.img} alt="" />
                    <div className='space-y-6 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>{project.name}</h4>
                        <div className='flex flex-col items-center'>
                            <h4 className='text-2xl mb-4'>Tech Stack</h4>
                            <div className='flex flex-row space-x-5'>
                                {project.tech.map((tech) =>(
                            <img className=' object-cover h-20 w-20 rounded-full' src={tech} alt="" />
                                ))}

                            </div>
                        </div>
                        <p className='text-lg text-center md:text-left'>{project.desc}</p>
                    </div>
                              <div className='flex justify-center'>
                        <Link href={project.url}>
                        <button className='bg-[#242424] border border-[#F96666] hover:bg-[#F96666]/20 hover:text-white h-16 w-80 text-gray-400 rounded-3xl mt-4 tracking-[8px] font-bold uppercase'>Github Repo</button>
                        </Link>
                        </div>
                </div>
            ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#F96666]/20 left-0 h-[500px] -skew-y-12'/>
    </motion.div>
  )
}

export default Projects