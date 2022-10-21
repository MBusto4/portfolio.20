import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Header from "../components/Header"
import Hero from '../components/Hero'
import SchoolExperience from '../components/SchoolExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Create Next App</title>
      </Head>
       {/* Header */}
       <Header/>

       {/* Hero */}
       <section id="hero" className='snap-start'>
        <Hero/>
       </section>

       {/* About */}
       <section id='about' className='snap-center'>
       <About />
       </section>

       {/* Work Experience */}
        <section id='workExperience' className='snap-center'>
       <WorkExperience/>
       </section>

            {/* School Experience */}
        <section id='schoolExperience' className='snap-center'>
       <SchoolExperience/>
       </section>
       


       {/* Skills */}
               <section id='skills' className='snap-start'>
       <Skills/>
       </section>

       {/* Projects */}
               <section id='projects' className='snap-start'>
       <Projects/>
       </section>
       {/* Personal Hobby Clones */}

       {/* Contact Me */}




    </div>
  )
}

export default Home
