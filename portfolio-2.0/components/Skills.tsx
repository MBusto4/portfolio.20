import React from 'react'
import{motion} from 'framer-motion'
import Skill from './Skill'

type Props = {
    directionLeft?: boolean
    isGreen?: boolean

}

const skills = [
  {
  img:'https://ionicframework.com/docs/icons/logo-react-icon.png',
  proficiency:'95%',
  name:'React'
},
{
  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ0uw9hyqbCFj_XMEPiuLvQnTSRkE0i-s6FdZv-W7fcutNM4VQ0u03pzMVwUzOtc2I3RI&usqp=CAU',
  proficiency:'90%',
  name:'React Native'
},
{
  img:  'https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png',
  proficiency:'95%',
  name:'Javascript'
},
{
  img:'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/nextjs-boilerplate-logo.png',
  proficiency:'90%',
  name:'Next.js'
},
{
  img:'https://e7.pngegg.com/pngimages/669/447/png-clipart-redux-react-javascript-freecodecamp-npm-others-miscellaneous-purple-thumbnail.png',
  proficiency:'90%',
  name:'Redux'
},
{
  img:'data:image/jpeg;base64,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',
  proficiency:'95%',
  name:'TailwindCss'
},
{
  img:'https://ih1.redbubble.net/image.2332483620.2906/fposter,small,wall_texture,product,750x1000.jpg',
  proficiency:'70%',
  name:'Kotlin'
},
{
  img:'https://icon2.cleanpng.com/20180417/irq/kisspng-firebase-cloud-messaging-computer-icons-google-clo-github-5ad5d3cde70706.9853526815239628299463.jpg',

  proficiency:'75%',
  name:'Firebase'
},
{
  img:'https://media.glassdoor.com/sqll/4747101/sanity-ca-squareLogo-1640192856530.png',

  proficiency:'80%',
  name:'Sanity.io'
},
{
  img:'data:image/png;base64,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',
  proficiency:'85%',
  name:'MaterialUI'
},
{
  img:'https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png',

  proficiency:'90%',
  name:'Express.js'
},
{
  img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png',
  proficiency:'90%',
  name:'PostgresSQL'
},
{
  img:'https://google.github.io/sqlcommenter/images/sequelize-logo.png',
  proficiency:'90%',
  name:'Sequelize.js'
},
{
  img: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  proficiency:'99%',
  name:'Github'
},
{
  img:'https://i.pinimg.com/564x/be/d3/0d/bed30ddfa5d434e827c775ac9a3b0d38.jpg',
  proficiency:'85%',
  name:'Bootstrap'
},
{
  img:'https://www.svgrepo.com/show/303600/typescript-logo.svg',
  proficiency:'80%',
  name:'Typescript'
},
{
  img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png',
  proficiency:'75%',
  name:'Metamask'
},
{
  img:'https://ih1.redbubble.net/image.525157175.0839/flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
  proficiency:'70%',
  name:'Solidity'
},

]

function Skills({directionLeft,isGreen}: Props) {
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>

<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>Skills</h3>

<h3 className='absolute top-36 uppercase tracking-[3px] text-gray-400 text-sm'>Hover over a skill for current profieciency</h3>

<div className='grid grid-cols-6 gap-5'>
    {/* <Skill/>
    <Skill/>
    <Skill/>
    <Skill/>
    <Skill/>
    <Skill/>
    <Skill/>
    <Skill/>
    <Skill/>
    <Skill/>
    <Skill/>
    <Skill/> */}
    {skills.map((skill,i) => (      
     <div key={i} className='group relative flex cursor-pointer'>
        <motion.img
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
        }}

        whileInView={{opacity:1,x:0}}
        transition={{duration:1}}
        className='rounded-full border border-gray-500 object-center w-28 h-28 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        src={skill.img}
/>

<div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full z-0'>
    <div className='flex flex-col items-center justify-center h-full'>
        <p className='text-3xl font-bold text-black opacity-100'>{skill.proficiency}</p>
            <p className='text-lg font-bold text-black opacity-100'>{skill.name}</p>
        {/* <p className='text-3xl font-bold text-black opacity-100'>{skill.proficiency}</p> */}
        {/* {isGreen ? (
          <div>
            <p className='text-3xl font-bold text-[#00FF00] opacity-100'>{skill.proficiency}</p>
            <p className='text-lg font-bold text- opacity-100'>{skill.name}</p>
          </div>
        ):(
          <div>
            <p className='text-3xl font-bold text-[#FFFF00] opacity-100'>{skill.proficiency}</p>
            <p className='text-lg font-bold text-black opacity-100'>{skill.name}</p>
          </div>
        )} */}


    </div>
</div>
    </div>
    ))}
    </div>

    </motion.div>
  )
}

export default Skills