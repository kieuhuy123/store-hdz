import Image from 'next/image'
import React from 'react'

const Sponsor = () => {
  return (
    <div className='space-y-6'>
      <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center'>
        <Image
          className='cursor-pointer transition duration-300 opacity-50 hover:opacity-100'
          src='/sponsors5.png'
          alt='Sponsor'
          width='80'
          height='80'
        ></Image>
        <Image
          className='cursor-pointer duration-300 opacity-50 hover:opacity-100'
          src='/sponsors4.png'
          alt='Sponsor'
          width='80'
          height='80'
        ></Image>
        <Image
          className='cursor-pointer duration-300 opacity-50 hover:opacity-100'
          src='/sponsors3.png'
          alt='Sponsor'
          width='80'
          height='80'
        ></Image>
        <Image
          className='cursor-pointer duration-300 opacity-50 hover:opacity-100 hidden sm:block'
          src='/sponsors2.png'
          alt='Sponsor'
          width='80'
          height='80'
        ></Image>
        <Image
          className='cursor-pointer duration-300 opacity-50 hover:opacity-100 hidden lg:block'
          src='/sponsors1.png'
          alt='Sponsor'
          width='80'
          height='80'
        ></Image>
      </div>
    </div>
  )
}

export default Sponsor
