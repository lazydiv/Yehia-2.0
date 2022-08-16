import React from 'react'

const Contact = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('submit')
    }
    
    return (
        <div id='contact' className='py-10'>
            <h1 className='font-medium text-xl '>Contact.</h1>
            <div className='flex-col flex p-5 my-5'>
            <div className='bg-slate-100 p-1 rounded-sm dark:bg-dark/30 lg:p-5 lg:w-full '>
                <form action="" onSubmit={handleSubmit} className='flex flex-col justify-around'>
                    <input className='outline-none p-3 m-3  bg-dark/5 dark:bg-white/5' type="text" placeholder='Full Name' />
                    <input className='outline-none p-3 m-3 bg-dark/5 dark:bg-white/5' type="email" placeholder='Email' />
                    <textarea placeholder='message . . .' className='outline-none  bg-dark/5 dark:bg-white/5 p-3 m-3 resize-none h-56' />
                    <input type='submit'  value='Send' className='bg-dark/5 cursor-pointer dark:bg-white/5 p-3 m-3'/>
                </form>
                </div> 
                <ul className='flex w-3/6 lg:w-2/6 mt-5 cursor-pointer justify-between'>
                    <li className='hover:bg-slate-100 hover:dark:bg-white/5 rounded-lg p-2'>Github</li>
                    <li className='hover:bg-slate-100 hover:dark:bg-white/5 rounded-lg p-2'>LinkedIn</li>
                    <li className='hover:bg-slate-100 hover:dark:bg-white/5 rounded-lg p-2'>Twitter</li>
                    <li className='hover:bg-slate-100 hover:dark:bg-white/5 rounded-lg p-2'>Email</li>
                    <li className='hover:bg-slate-100 hover:dark:bg-white/5 rounded-lg p-2'>Instagram</li>
                </ul>
            </div>
        </div>
    )
}

export default Contact