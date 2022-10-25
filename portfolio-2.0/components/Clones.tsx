import React from 'react'
import{motion} from 'framer-motion'
import Link from 'next/link'


type Props = {}

const react =  "https://ionicframework.com/docs/icons/logo-react-icon.png"
const nextjs = 'https://ui-lib.com/blog/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png'
const sanity ='https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_96102ac6497377cd53da621075fe828e/sanity.png'
const tailwind = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png'
const metamask ='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png'
const web3 = 'https://i.etsystatic.com/30965494/r/il/3d9bce/3526008378/il_fullxfull.3526008378_qsce.jpg'
const firebase ='https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-vertical.png'
const materialUi ='https://mui.com/static/logo.png'
const solidity = 'https://soliditylang.org/images/logo.svg'



function Clones({}: Props) {
    const clones = [
        {
            name:'Opensea Clone',
            tech:[
                react,
                nextjs,
                web3,
                sanity,
                tailwind,
                metamask
        ],
            img:'https://michaelbusto.net/images/Opensea-clone-homepage.png',
            description:'',
            url:'https://github.com/MBusto4/opensea-clone'
        },
                {
            name:'Twitter Clone',
            tech:[
                react,
                nextjs,
                web3,
                tailwind,
                solidity,
            ],
            img:'https://michaelbusto.net/images/Twitter-Blockchain.png',
            description:'',
            url:'https://github.com/MBusto4/twitter-blockchain'
        },
                {
            name:'Discord Clone',
            tech:[
                react,
                nextjs,
                web3,
                sanity,
                metamask
            ],
            img:'https://michaelbusto.net/images/Discord-clone.png',
            description:'',
            url:'https://github.com/MBusto4/discord2.0'
        },
                {
            name:'Uniswap Clone',
            tech:[
                react,
                nextjs,
                sanity,
                web3,
                solidity,
                metamask
            ],
            img:'https://michaelbusto.net/images/uniswap-main.png',
            description:'',
            url:'https://github.com/MBusto4/uniswap-clone'
        },
                {
            name:'Crypto Punks Clone',
            tech:[
                react,
                web3,
                metamask
            ],
            img:'https://michaelbusto.net/images/crypto-punk-clone.png',
            description:'',
            url:'https://github.com/MBusto4/crypto-punk-clone'
        },
                {
            name:'Uber Clone',
            tech:[
                react,
                nextjs,
                metamask,
                tailwind,
                sanity
            ]
                ,
            img:'https://michaelbusto.net/images/Uber-clone.png',
            description:'',
            url:'https://github.com/MBusto4/uber-clone'
        },
                {
            name:'Airbnb Clone',
            tech:[
                react,
                nextjs,
            tailwind,
            ],
            img:'https://michaelbusto.net/images/Airbnb-clone.png',
            description:'',
            url:'https://github.com/MBusto4/airbnb-clone'
        },
                {
            name:'Amazon Clone',
            tech:[react,
            firebase,
            materialUi
            ],
            img:'https://michaelbusto.net/images/Amazon-clone.png',
            description:'',
            url:'https://github.com/MBusto4/amazon-clone'
        },
                {
            name:'Spotify Clone',
            tech:[react, firebase,materialUi],
            img:'https://michaelbusto.net/images/Spotify-clone.png',
            description:'',
            url:'https://github.com/MBusto4/media-player'
        },
                {
            name:'Instgram Clone',
            tech:[react,
                nextjs,
            tailwind,
        firebase,
    ],
            img:'https://michaelbusto.net/images/insta-clone-thumbnail.png',
            description:'',
            url:'https://github.com/MBusto4/instagram-clone'
        },
                {
            name:'Google Docs Clone',
            tech:[react,nextjs, tailwind,firebase],
            img:'https://michaelbusto.net/images/Google-docs-clone.png',
            description:'',
            url:'https://github.com/MBusto4/googleDocs-clone'
        },
            {
            name:'Netflix  Clone',
            tech:[react,firebase,materialUi],
            img:'https://michaelbusto.net/images/netflixclone.jpeg',
            description:'',
            url:'https://github.com/MBusto4/netflix-clone'
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
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>Hobby Clones</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {/* Projects */}
            {clones.map((clone,i) => (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen mt-24'>
                    <motion.img 
                        initial={{
                            y:-300,
                        opacity:0
                     }}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1.2}}
                    
                    className='xl:max-w-2xl rounded-lg' src={clone.img} alt="" />
                    <div className='space-y-6 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>{clone.name}</h4>
                        <div className='flex justify-center items-center'>
                        <h4 className='text-2xl'>Tech Stack</h4>
                        </div>
                        <div className='flex flex-row items-center space-x-5 justify-center'>
                        {clone.tech.map((tech) => (
                            <img className=' object-cover h-20 w-20 rounded-full' src={tech} alt="" />
                            

                            ))}
                            </div>
                        {/* <p className='text-lg text-center md:text-left'>em Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p> */}
                        <div className='flex justify-center'>
                        <Link href={clone.url}>
                        <button className='bg-[#242424] border border-[#F96666] hover:bg-[#F96666]/20 hover:text-white h-16 w-80 text-gray-400 rounded-3xl mt-4 tracking-[8px] font-bold uppercase'>Github Repo</button>
                        </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#F96666]/20 left-0 h-[500px] -skew-y-12'/>
    </motion.div>
  )
}

export default Clones