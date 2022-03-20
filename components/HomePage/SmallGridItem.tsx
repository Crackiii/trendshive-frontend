/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Tags from '../shared/Tags';

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

  const desc = item.desc.length > 100 ? item.desc.slice(0, 100) : item.desc

  return (
    <div className="mb-2 sm:mb-0 min-h-32 bg-white flex flex-row justify-start items-center min-h-full min-w-full shadow-sm relative transition-shadow hover:shadow-md cursor-pointer">
      <div className='relative w-48 h-40 sm:w-48 sm:h-full overflow-hidden'>
        <img src={item.image} alt="img" className='object-cover w-full min-w-full h-full min-h-full' />
      </div>
      <div className='w-full min-h-full p-2 flex flex-col justify-between'>
        <div className="flex justify-end">
         <span className='w-fit text-xs items-center leading-sm font-light'>
          <Tags tags={[item.category]} /> 
          </span>
        </div>
        <div className='text-lg mb-1'>
          {item.title} 
        </div>
        <div className='text-xs font-light text-gray-500 tracking-wide'>
          {desc} 
          <span className='text-xs text-blue-500'> (read more...)</span>
        </div>
        <div className='flex flex-row justify-end'>
          <div className='text-xs text-slate-400'>
            {item.source}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default SmallGridItem
