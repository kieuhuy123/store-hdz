import React from 'react'
import Button from './ui/button'

const Collection = () => {
  return (
    <div className='space-y-4'>
      <h3 className='font-bold text-3xl'>{'Collection'}</h3>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div
          className='h-[300px] lg:h-[600px] relative bg-cover bg-slate-800 b'
          style={{
            backgroundImage: `url(/50-hip-hop.jpg)`
          }}
        >
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full text-center px-4 space-y-4'>
            <Button className='bg-white text-black'>{'Shop'}</Button>
          </div>
        </div>
        <div className='grid grid-rows-1 lg:grid-rows-2 gap-4'>
          <div
            className='h-[150px] lg:h-[292px] relative bg-cover bg-slate-800 '
            style={{
              backgroundImage: `url(/men.jpg)`
            }}
          >
            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full text-center px-4 space-y-4'>
              <Button>{"Men's"}</Button>
            </div>
          </div>
          <div
            className='h-[150px] lg:h-[292px] relative bg-cover bg-slate-800 '
            style={{
              backgroundImage: `url(/woman.jpg)`
            }}
          >
            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full text-center px-4 space-y-4'>
              <Button>{"Woman's"}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
