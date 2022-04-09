/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
import { useImage } from '../../utils/hooks';
import Tags from '../shared/Tags';


interface Props {
  item: any
}

function SmallGridItem({item}: Props) {

  const {image: favicon} = useImage(item?.url);
  const image = item?.imageUrl
  const description = ''
  const correctDescription = ''
  const title = item?.title
  const source = item?.source

  return (
    <Link href={item.url} passHref>
    <span>
      <a className='mb-2 sm:mb-0 h-36 bg-white grid grid-cols-8 relative cursor-pointer overflow-hidden group'>
      <div className='relative col-span-2'>
        <img src={image || favicon} alt="img" className='object-cover w-full min-w-full h-full min-h-full' />
      </div>
      <div className='p-2 col-span-6 flex flex-col justify-between'>
        <div className="flex justify-end">
          <span className='w-fit text-xs items-center leading-sm font-light'>
            <Tags tags={[item?.time]} show={1} /> 
          </span>
        </div>
        <div className='text-lg mb-1 w-full group-hover:text-blue-500 group-hover:underline' dangerouslySetInnerHTML={{__html: title}}></div>
        <div className='text-xs font-light text-gray-500 tracking-wide'>
          {Boolean(correctDescription) && <span className='text-xs'>{correctDescription} <span className='text-blue-500'>(read more...)</span></span>} 
        </div>
        <div className='flex flex-row justify-end'>
          <div className='text-xs text-slate-400'>
            {source}
          </div>
        </div>
      </div>
   </a></span></Link>
  )
}

export default SmallGridItem
