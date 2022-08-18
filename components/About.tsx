import { useInView, useAnimation, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

const About = () => {
  // animate on view
  const variants = {
    hidden: { opacity: 0, x: 0, y: -200 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
  }
  const variants2 = {
    hidden: { opacity: 1, x: 0, y: -200, skewY: -10 },
    enter: { opacity: 1, x: 0, y: 0, skewY: 0 },
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
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -500px 0px", once: false });
  const controls = useAnimation()
  // animate on view


  const varients = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
  }
  useEffect(() => {
    if (isInView) {
      console.log('in view')
      controls.start("enter");
    } else {
      console.log('out of view')
      controls.start("exit");
    }
  }, [controls, isInView]);


  return (
    <div id='about' className='h-screen space-y-24  w-full flex flex-col'>
      <h1 className='text-xl '>About.</h1>
      <motion.main variants={variants2} ref={ref} initial='hidden' animate={controls} transition={transition2} className='lg:text-6xl text-5xl md:text-5xl '>
        <motion.span variants={variants} initial='hidden' transition={{ transition, delay: 0.1 }} animate={controls} className=''>Young but not dump developer who works from home.<br /></motion.span>
        <motion.span variants={variants} initial='hidden' transition={{ transition, delay: 0.2 }} animate={controls} className=''>started coding when i was in mid school with the passion<br /> </motion.span>
        <motion.span variants={variants} initial='hidden' transition={{ transition, delay: 0.3 }} animate={controls} className=''>build more powerful apps and develope my coding skills<br /></motion.span>
        <motion.span variants={variants} initial='hidden' transition={{ transition, delay: 0.4 }} animate={controls} className=''>when i was in the last year of the mid school i got my first<br /></motion.span>
        <motion.span variants={variants} initial='hidden' transition={{ transition, delay: 0.5 }} animate={controls} className=''>as a graphic designer, then i decided to retire from work and<br /></motion.span>
        <motion.span variants={variants} initial='hidden' transition={{ transition, delay: 0.6 }} animate={controls} className=''>work form home and to chase my passion towards coding<br /></motion.span>
      </motion.main>
      <hr className='mt-10 w-3/6 mx-auto' />
    </div>
  )
}

export default About