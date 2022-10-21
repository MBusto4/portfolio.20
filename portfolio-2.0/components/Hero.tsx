import Link from 'next/link'
import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles'
// import profileImage from '../public/profile-picture.jpeg'

type Props = {}

function Hero({}: Props) {
    const [text, count ] = useTypewriter({
        words:[
        'Hi, My Name is Michael !',
        'I am a Software Engineer.',
        'I Specialize In Web and App Development.',
        `Why did the functional component feel lost? Because it didn't know what state it was in!`,],
        loop:true,
        delaySpeed:2000
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <img 
        className='relative rounded-full object-cover h-44 w-44 mx-auto'
        src='https://scontent.fewr1-6.fna.fbcdn.net/v/t39.30808-6/310041924_6342817565745267_5847666273196783069_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=eOPLyOzxFH8AX9BVdjK&_nc_ht=scontent.fewr1-6.fna&oh=00_AT-KFGgbKmO9YZ54QPBev81MTc8vR_vND7Nh4tUjXTI_LA&oe=635892D1' alt="" />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-400 pb-2 tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-3xl lg:text-4xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#F96666'/>
        </h1>
        <div className='pt-5'>
            <Link href='#about'>
            <button className='hero-button'>About</button>
            </Link>

            <Link href='#experience'>
            <button className='hero-button'>Experience</button>
            </Link>

            <Link href='#skills'>
            <button className='hero-button'>Skills</button>
            </Link>
            
            <Link href='#projects'>
            <button className='hero-button'>Projects</button>
            </Link>

            <Link href='#clones'>
            <button className='hero-button'>Clones</button>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Hero