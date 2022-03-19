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

  const title = item.title.length > 40 ? item.title.slice(0, 40) + '...' : item.title

  return (
    <div className="h-28 bg-white flex flex-row justify-start items-center min-h-full min-w-full shadow-sm relative">
      <div className='relative w-48 h-full border'>
        <img src={item.image} alt="img" className='object-cover w-full min-w-full h-full min-h-full' />
      </div>
      <div className='w-full min-h-full p-2 flex flex-col justify-center'>
        <div className='text-sm'>
          {title} 
        </div>
        <div className='text-xs text-right mt-5 text-slate-400'>
          {item.source}
        </div>
      </div>
      <div className='absolute right-0 -top-2'>
      <div className="text-xs inline-flex items-center font-bold leading-sm px-2 py-1 bg-green-200 text-green-700">
        {item.category}
      </div>
      </div>
    </div>
  )
}

export default SmallGridItem