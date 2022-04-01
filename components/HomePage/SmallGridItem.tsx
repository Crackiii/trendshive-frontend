/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
import { getFaviconByUrl, getHost, truncate } from '../../utils/common';
import Tags from '../shared/Tags';
import { validURL } from './HomePage';


interface Props {
  item: any
}



function SmallGridItem({item}: Props) {

  const favicon = getFaviconByUrl(item.source) || validURL(item.favicon) && item.favicon
  const image = item.images?.filter(validURL)?.[0] || favicon || item.all_images?.filter(validURL)?.[0]
  const description = (item?.descriptions?.find((d: string) => !validURL(d))?.substr(0, 130) ||  item.short_description).slice(0, 100);
  const correctDescription = description !== 'undefined' || description !== undefined ? description : ''
  const title = item?.title
  const source = truncate(getHost(item.source),10, 5, 20) || '';
  const category = [item.category || item.keywords?.split(',') || []]

  return (
    <Link href={`/story/${item.id}`}>
      <a className='className="block mb-2 sm:mb-0 h-36 bg-white grid grid-cols-8 relative cursor-pointer overflow-hidden group'>
        <div className='relative col-span-2'>
          <img src={image || '/fallback.png'} alt="img" onError={(ev) => ev.currentTarget.src = favicon || '/fallback.png'} className='object-cover w-full min-w-full h-full min-h-full' />
        </div>
        <div className='p-2 col-span-6 flex flex-col justify-between'>
          <div className="flex justify-end">
            {
              item.category || item.keywords.split(',')[0].trim().length > 0 &&
              <span className='w-fit text-xs items-center leading-sm font-light'>
                <Tags tags={category} show={1} /> 
              </span>
            }
          </div>
          <div className='text-lg mb-1 w-full whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-blue-500 group-hover:underline'>
            {title} 
          </div>
          <div className='text-xs font-light text-gray-500 tracking-wide'>
            {Boolean(correctDescription) && <span className='text-xs'>{correctDescription} <span className='text-blue-500'>(read more...)</span></span>} 
          </div>
          <div className='flex flex-row justify-end'>
            <div className='text-xs text-slate-400'>
              {source}
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default SmallGridItem
