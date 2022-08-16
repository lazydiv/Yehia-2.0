import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Work from '../components/Services'
// frammer motion 
import {motion} from 'framer-motion'

const Home: NextPage = () => {
  const [monted, setIsMounted] = useState(false)
  const variants = {
    hidden: { opacity: 0, x: 0, y: -200 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
  }
  const variants2 = {
    hidden: { opacity: 1, x: 0, y: -200 , skewY: -10},
    enter: { opacity: 1, x: 0, y: 0, skewY: 0},
    exit: { opacity: 1, x: 0, y: 0 },
  }
  const transition = {
    type: 'spring',
    duration: 0.8,
    ease: 'easeInOut',
  }
  const transition2 = {
    type: 'spring',
    duration: 1,
    ease: 'easeInOut',
  }
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="flex min-h-screen  flex-col mx-auto  md:w-5/6 w-full px-2 ">
      <Head>
        <title>Yehia.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='h-screen min-h-[50vw] justify-center space-y-20  flex flex-col'>
      <motion.main variants={variants2} initial='hidden'  animate='enter' exit='exit' transition={transition2}  className='lg:text-8xl  text-5xl md:text-6xl lg:mt-20 mt-0 leading-tight'>
        <motion.span variants={variants} initial='hidden' transition={{transition, delay: 0.1}} animate='enter' exit='exit' >Hello 👋<br /></motion.span>
        <motion.span variants={variants} initial='hidden' transition={{transition, delay: 0.2}}  animate='enter' exit='exit'>I'm Yehia Khalid - Talented  <br /> </motion.span>
        <motion.span variants={variants} initial='hidden' transition={{transition, delay: 0.3}} animate='enter' exit='exit' >developer and designer<br /></motion.span>
        <motion.span variants={variants} initial='hidden' transition={{transition, delay: 0.4}} animate='enter' exit='exit'>based in Cairo, Egypt. </motion.span>
      </motion.main>
      <ul className='flex mb-24 w-3/6 lg:w-2/6 mt-5 cursor-pointer justify-between'>
        <li className='hover:bg-slate-100 hover:dark:bg-white/5 rounded-lg p-2'>Github</li>
        <li className='hover:bg-slate-100 hover:dark:bg-white/5 rounded-lg p-2'>LinkedIn</li>
        <li className='hover:bg-slate-100 hover:dark:bg-white/5 rounded-lg p-2'>Twitter</li>
        <li className='hover:bg-slate-100 hover:dark:bg-white/5 rounded-lg p-2'>Email</li>
        <li className='hover:bg-slate-100 hover:dark:bg-white/5 rounded-lg p-2'>Instagram</li>
      </ul>
      <hr  id='services'  className='mt-10 w-3/6 mx-auto' />
      </div>
      <Work />
      <About />
      <Contact />
    </div>
  )
}

export default Home
