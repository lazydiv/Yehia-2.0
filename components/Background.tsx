import React from 'react'
import Image from 'next/image'
// import noise from ''
const Background = () => {
  return (
    <div className='w-full'>
        {/* <Image  src="/noise.png" layout='fill' alt='background' className='first fi' /> */}
        <Image  src="/noise2.png" layout='fill' alt='background' className='opacity-5 select-none ' />
    </div>
  )
}

export default Background