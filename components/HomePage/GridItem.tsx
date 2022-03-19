/* eslint-disable @next/next/no-img-element */
import React from 'react'
type Item = {
  image: string;
  desc: string;
  title: string;
  source: string
}
interface Props {
  item: Item
}

function GridItem({item}: Props) {
  return (
    <div className='h-96 sm:h-auto w-full border relative group overflow-hidden '>
      <div className='w-full h-full min-h-full min-w-full relative sm:group-hover:scale-125 transition'>
        <img src={item.image} alt='image' className='object-cover w-full min-w-full h-full min-h-full' />
      </div>
      <div className='absolute group top-0 left-0 w-full h-full bg-slate-900 bg-opacity-60 hover:bg-opacity-70 flex flex-col justify-end cursor-pointer overflow-hidden'>
          <div className='p-2'>
              <div className='font-semibold text-white mb-3 group-hover:first:text-blue-400 group-hover:first:underline'>
                {item.title}
              </div>
              <div className=' text-slate-300 text-xs mb-2 tracking-wider'>
                {item.desc}
              </div>
              <div className=' text-white text-xs mb-1 font-mono text-right'>
                {item.source}
              </div>
          </div>
      </div>
    </div>
  )
}

export default GridItem