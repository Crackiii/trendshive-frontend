/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { getHost } from './GridItem'
import { validURL } from './HomePage'
import * as dates from 'date-fns'
import Tags from '../shared/Tags'
import { getFaviconByUrl } from './SmallGridItem'

interface Props {
  item: any
}

function RandomGridItem({item}: Props) {

  const favicon = getFaviconByUrl(item.url || item.source) || validURL(item.favicon) && item.favicon
  const keywords = item.keywords.trim().length ? item.keywords.split(',').slice(0,5) : item.queries?.slice(0,5) || []
  const image = item.images.filter(validURL)[0] || favicon
  const source = getHost(item.url || item.source)
  
  return (
    <div className="break-inside bg-white flex flex-col justify-star px-8 py-8 group cursor-pointer" style={{marginBottom: '1rem'}}>
      <Link href={`/story/${item.id}`}>
        <a>
          <div className='flex justify-between'>
            <div className=' w-28 h-28 overflow-hidden rounded-lg shadow-2xl'>
              <img src={favicon || image} onError={(ev) => ev.currentTarget.src = image || favicon} alt='img' className=' object-cover min-h-full min-w-full' />
            </div>
            <div className='flex flex-col justify-start'>
              <div className='flex justify-end'>
                <span className='text-xs bg-slate-700 hover:bg-slate-800 text-white inline-block min-w-fit py-1 px-2 text-center rounded-md'>{item.category}</span>
              </div>
              <div className='text-xs text-slate-300 text-right mt-5'>{dates.formatDistanceToNow(new Date(item?.date || item?.time))} ago</div>
              <div className='text-sm text-blue-400 text-right mt-3'>{source}</div>
            </div>
          </div>
          <div className='text-xl font-bold group-hover:text-blue-400 group-hover:underline mt-5'>{item.titles[0]}</div>
          <div className='text-base font-light text-slate-500 mt-5'>{item.descriptions[0]}</div>
          <div className='mt-5'>
            <Tags tags={keywords} />
          </div>
        </a>
      </Link>
    </div>
  )
}

export default RandomGridItem