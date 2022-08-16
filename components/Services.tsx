import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion"
const Services = () => {
  // animate on view
  const ref = useRef(null);
  const isInView = useInView(ref, {margin: "0px 0px -400px 0px", once: false});
  const controls = useAnimation()
  // animate on view
  
  
  const varients = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
  }
  
  const transition = {
    
    type: 'spring',
    duration: 1,
    ease: 'easeIn',
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
    <div className='h-screen space-y-20'>
        <h1 className='font-medium text-xl mt-'>Services.</h1>
        <motion.div ref={ref}  variants={varients}  initial='hidden' transition={transition} animate={controls} className=''>
          <ul>
            <li className='py-2 hover:bg-slate-100 hover:dark:bg-white/5 dar my-5 hover:scale-105 cursor-pointer rounded-lg'>
              <div className='p-5'> 
                <h2 className='font-medium text-xl'>Web Development.</h2>
                <p className='text-md text-gray-700 dark:text-white/50 lg:w-3/6 p-2'>
                  We build web applications using the latest technologies and tools and optimize online presense.
                  Having a website means customers are always able to find you – anytime, anywhere. Even outside of business hours.
                </p>
              </div>
            </li>
            <li className='py-2 hover:bg-slate-100 hover:dark:bg-white/5 dar my-5 hover:scale-105 cursor-pointer rounded-lg'>
              <div className='p-5'> 
                <h2 className='font-medium text-xl'>Mobile Development.</h2>
                <p className='text-md text-gray-700 dark:text-white/50 lg:w-3/6  p-2'>
                  We build profissional mobile applications for android and ios users.
                  We can turn your idea into a reality by designing a mobile application that fits your needs.
                </p>
              </div>
            </li>
            <li className='py-2 hover:bg-slate-100 hover:dark:bg-white/5 dar my-5 hover:scale-105 cursor-pointer rounded-lg'>
              <div className='p-5'> 
                <h2 className='font-medium text-xl'>Graphic Design.</h2>
                <p className='text-md text-gray-700 dark:text-white/50 lg:w-3/6 p-2'>
                  We do any kind of graphic design you want.
                  we turn you ideas into a realistic and beautiful product that visually appeals to your target audience.
                </p>
              </div>
            </li>
          </ul>
        </motion.div>
        <hr className='mt-10 w-3/6 mx-auto'/>
    </div>
  )
}

export default Services