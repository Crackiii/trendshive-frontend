/* eslint-disable @next/next/no-img-element */
import React from 'react'

type Item = {
  title: string;
  desc: string;
  image: string;
  source: string
  category: string
}

interface Props {
  item: Item
}

function SmallGridItem({item}: Props) {

  const title = item.title.length > 70 ? item.title.slice(0, 70) + '... see more' : item.title

  return (
    <div className="mb-2 sm:mb-0 min-h-32 bg-white flex flex-row justify-start items-center min-h-full min-w-full shadow-sm relative transition-shadow hover:shadow-xl cursor-pointer">
      <div className='relative w-48 h-40 sm:w-48 sm:h-full overflow-hidden'>
        <img src={item.image} alt="img" className='object-cover w-full min-w-full h-full min-h-full' />
      </div>
      <div className='w-full min-h-full p-2 flex flex-col justify-between'>
        <div className="flex justify-end">
         <span className='w-fit text-xs items-center font-bold leading-sm px-2 py-1 bg-green-200 text-green-700'>{item.category}</span>
        </div>
        <div className='text-sm mt-2'>
          {title} 
        </div>
        <div className='text-xs text-right mt-5 text-slate-400'>
          {item.source}
        </div>
      </div>
    </div>
  )
}

export default SmallGridItem
