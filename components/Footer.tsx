import React from 'react'

const Footer = () => {
    return (
        <footer className='md:rotate-90 z-50 md:fixed md:bottom-24 p-10 md:p-0 md:w-32 md:flex md:flex-col md:items-center md:justify-center  flex flex-col w-full  left-0 text-sm'>
            <div className='w-5/6 inline'>
                © Made by <a href='https://github.com/lazydiv' className='underline underline-offset-2'>Yehia.</a>
            </div>
        </footer>
    )
}

export default Footer