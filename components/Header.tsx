import React from 'react'
import { MoonIcon, SunIcon, MenuAlt3Icon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'
import Dropdown from './Dropdown'
import { motion } from 'framer-motion'
import Link from 'next/link'

function Header() {
  const { theme, setTheme } = useTheme()
  const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
  }
  const transition = {
    type: 'spring',
    duration: 0.5,
    ease: [0.6, 0.01, -0.05, 0.9]
  }

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  // making nav bar fixed on scroll
  const [isSticky, setIsSticky] = React.useState(false);
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // make nav bar hide when scroll up

    if (scrollTop > 40) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  
  
  
  return (
    // bg-white dark:bg-dark 
    <div className={`w-full ${isSticky ? 'fixed mt-0' : 'absolute mt-10'} bg-clip-text md:text-transparent   md:bg-white md:mix-blend-difference  flex-col z-[50]  items-center flex    text-md`}>
      <div className='md:w-5/6 w-full inline-flex justify-between '>

        <h1 className='py-3   font-medium md:mx-0 mx-3'><Link href="/">Yehia.</Link></h1>
        <motion.ul variants={variants} initial='hidden' transition={transition} animate='enter' exit='exit' className='items-center hidden md:flex'>
          <li className='p-3 after:w-full after:h-[2px] after:scale-x-0 dark:after:bg-white  after:hover:scale-x-100 after:transition-all after:opacity-80 after:cursor-pointer  after:origin-left  after:hidden md:after:block after:bg-white '><Link href='#services'>Services</Link></li>
          <li className='p-3 after:w-full after:h-[2px] after:scale-x-0 dark:after:bg-white after:hover:scale-x-100 after:transition-all after:opacity-80 after:cursor-pointer  after:origin-left   after:hidden md:after:block after:bg-white'><Link href='#about'>About</Link></li>
          <li className='p-3 after:w-full after:h-[2px] after:scale-x-0 dark:after:bg-white after:hover:scale-x-100 after:transition-all after:opacity-80 after:cursor-pointer  after:origin-left   after:hidden md:after:block after:bg-white'><Link href='mailto:yhiazedan555@gmail.com'>Contact</Link></li>
          <li className='hover:bg-slate-100 hover:dark:bg-white/5 group md:text-white md:hover:text-black dark:hover:text-white hover:rounded-lg hover:cursor-pointer'>
            <button onClick={handleThemeChange} className='flex  p-3'>
              {
                theme === 'light' ? (
                  <MoonIcon className='w-3 items-center' />
                ) : (
                  <SunIcon className='w-3 items-center' />
                )
              }
            </button>
          </li>
        </motion.ul>
        <div className='md:hidden p-3'>
          <Dropdown />
        </div>
      </div>
    </div>
  )
}

export default Header