import React from 'react'
import { motion, useScroll } from "framer-motion"

const Progress = () => {
    const { scrollYProgress } = useScroll();

  return (
    <motion.div style={{ scaleY: scrollYProgress }} className='fixed origin-bottom bottom-0 h-screen bg-red-500 dark:bg-white w-[3px] text-white'/>
  )
}

export default Progress