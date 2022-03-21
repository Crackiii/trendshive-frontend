/* eslint-disable @next/next/no-img-element */
import React from 'react'

type Item = {
  title: string;
  desc: string;
  image: string;
  source: string
  category: string
  favicon: string
}

interface Props {
  item?: Item
  background?: string
}

function ListItem({item, background}: Props) {
  return (
    <div className={`grid grid-cols-8 grid-rows-1 p-2 group relative cursor-pointer ${background ?? 'bg-white'}`}>
      <div className='col-span-2 flex'>
        <div className='w-16 h-16 relative overflow-hidden rounded-xl shadow-lg shadow-slate-400'>
          <img src={item?.image} alt='image' className='min-h-full min-w-full object-cover' />
          <div className='absolute left-0 top-0 flex flex-col justify-center items-center z-10 w-full h-full bg-slate-500 bg-opacity-50'>
            <img src={'/play.png'} alt='img' className='object-cover w-10 h-10' />
          </div>
        </div>
      </div>
      <div className='col-start-3 col-span-6'>
        <div className='text-sm group-hover:text-blue-600'>{item?.title}</div>
        <div className='text-xs w-full overflow-hidden text-ellipsis whitespace-nowrap mt-2 text-slate-400'>{item?.desc}</div>
      </div>
      <div className='col-start-1 col-span-5 mt-4 text-blue-400 font-light text-sm text-right lowercase'>
        <div className='flex justify-start w-full overflow-hidden text-ellipsis whitespace-nowrap'>
         {item?.favicon && <img className='w-4 h-4 mr-2' src={item?.favicon} alt={'source'} /> }
          <span>{item?.source}</span>
        </div>
      </div>
      <div className='col-start-6 col-span-3 mt-4 text-slate-400 font-light text-sm flex justify-end'>
        <span className=' text-white bg-slate-600 py-1 px-2 rounded-md text-xs'>{item?.category}</span>
      </div>
    </div>
  )
}

export default ListItem