import React from 'react'
import{motion} from 'framer-motion'


type Props = {}

function Clones({}: Props) {
    const clones = [1,2,3,4,5]
  return (
    <motion.div
        initial={{
        opacity:0
    }}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>Hobby Clones</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {/* clones */}
            {clones.map((clone,i) => (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img 
                        initial={{
                            y:-250,
                        opacity:0
                     }}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1.2}}
                    
                    className='xl:max-w-3xl' src="https://user-images.githubusercontent.com/66042550/142079298-976a4dd7-7abc-4fd0-a41a-559252e3ac55.png" alt="" />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'> <span className='underline decoration-[#F96666]/40'>Case study {i+1} of {clones.length}:</span> UPS CLONE</h4>
                        <p className='text-lg text-center md:text-left'>em Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </div>
                </div>
            ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#F96666]/20 left-0 h-[500px] -skew-y-12'/>
    </motion.div>
  )
}

export default Clones