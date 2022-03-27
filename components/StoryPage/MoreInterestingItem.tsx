/* eslint-disable @next/next/no-img-element */
import React from 'react'
import * as dates from 'date-fns'
import { getHost } from '../HomePage/GridItem'
import { getFaviconByUrl } from '../HomePage/SmallGridItem'
import Tags from '../shared/Tags'
import Link from 'next/link'

interface Props {
  item: any
}

function MoreInterestingItem({item}: Props) {

  const source = getHost(item.url)
  const favicon = getFaviconByUrl(item.url)
  const image = item.images[0] || favicon
  const keywords = item.keywords?.trim().length ? item.keywords?.split(',') : []
  const tags = keywords.length ? keywords : item.related_queries
  const title = item.titles[0]
  const description = item.descriptions[0]

  return (
    <Link href={`${item.id}`}>
      <a>
        <div className="break-inside bg-white flex flex-col justify-start px-8 py-8 group cursor-pointer" style={{marginBottom: '1rem'}}>
          <div className='flex justify-between'>
            <div className=' w-28 h-28 overflow-hidden rounded-lg shadow-2xl'>
              <img src={image || favicon || '/fallback.png'} alt='img' onError={(ev) => ev.currentTarget.src = favicon || '/fallback.png'} className=' object-cover min-h-full min-w-full' />
            </div>
            <div className='flex flex-col justify-start'>
              <div className='flex justify-end'>
                <span className='text-xs bg-slate-700 hover:bg-slate-800 text-white inline-block min-w-fit py-1 px-2 text-center rounded-md'>{item.category}</span>
              </div>
              <div className='text-xs text-slate-300 text-right mt-5'>{dates.formatDistanceToNow(new Date(item?.date || Date.now()))}</div>
              <div className='text-sm text-blue-400 text-right mt-3'>{source}</div>
            </div>
          </div>
          <div className='text-xl font-bold group-hover:text-blue-400 group-hover:underline mt-5'>{title}</div>
          <div className='text-base font-light text-slate-500 mt-5'>{description}</div>
          <div className='mt-5'>
            <Tags tags={tags || []} />
          </div>
        </div>
      </a>
    </Link>
  )
}

export default MoreInterestingItem