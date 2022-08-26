import React, { useState } from 'react'

const Contact = () => {

    return (
        <div id='contact' className='h-screen   flex flex-col justify-around'>
            <div className=''>

            <h1 className='font-medium text-xl '>Contact.</h1>
            <div className='flex-col flex p-5 my-5'>
            <div className='bg-slate-100 p-1 rounded-sm dark:bg-dark/30 lg:p-5 lg:w-full '>
                <form action="" className='flex flex-col justify-around'>
                    <input id='name' className='outline-none p-3 m-3  bg-dark/5 dark:bg-white/5' type="text" placeholder='Full Name' />
                    <input id='email' className='outline-none p-3 m-3 bg-dark/5 dark:bg-white/5' type="email" placeholder='Email' />
                    <textarea id='message' placeholder='message . . .' className='outline-none  bg-dark/5 dark:bg-white/5 p-3 m-3 resize-none h-56' />
                    <input type='submit'  value='Send' className='bg-dark/5 cursor-pointer dark:bg-white/5 p-3 m-3'/>
                </form>
                </div> 
                <ul className='flex w-3/6 md:mt-20 mt-5 lg:w-2/6 cursor-pointer justify-between'>
                <li className='hover:bg-slate-100 hover:dark:bg-white/5 rounded-lg p-2'><a href="https://github.com/lazydiv">Github</a></li>
        <li className='hover:bg-slate-100 hover:dark:bg-white/5 rounded-lg p-2'><a href="https://www.linkedin.com/in/yehia-khalid-ab63b4181/">LinkedIn</a></li>
        <li className='hover:bg-slate-100 hover:dark:bg-white/5 rounded-lg p-2'><a href="https://twitter.com/home">Twitter</a></li>
        <li className='hover:bg-slate-100 hover:dark:bg-white/5 rounded-lg p-2'><a href="mailto:yhiazedan555@gmail.com">Email</a></li>
        <li className='hover:bg-slate-100 hover:dark:bg-white/5 rounded-lg p-2'><a href="https://www.instagram.com/yahia_khalid_/"></a>Instagram</li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Contact