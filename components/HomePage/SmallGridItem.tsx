/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
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
    <Link href={'/story/trending-now'}>
      <a className='className="block mb-2 sm:mb-0 h-36 bg-white grid grid-cols-8 relative cursor-pointer overflow-hidden group'>
        <div className='relative col-span-2'>
          <img src={item.image} alt="img" className='object-cover w-full min-w-full h-full min-h-full' />
        </div>
        <div className='p-2 col-span-6'>
          <div className="flex justify-end">
          <span className='w-fit text-xs items-center leading-sm font-light'>
              <Tags tags={[item.category]} /> 
            </span>
          </div>
          <div className='text-lg mb-1 w-full whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-blue-500 group-hover:underline'>
            {item.title} 
          </div>
          <div className='text-xs font-light text-gray-500 tracking-wide'>
            {Boolean(desc.length) && <span className='text-xs'>{desc} <span className='text-blue-500'>(read more...)</span></span>} 
          </div>
          <div className='flex flex-row justify-end'>
            <div className='text-xs text-slate-400'>
              {item.source}
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default SmallGridItem
