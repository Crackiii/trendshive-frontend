/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
import Tags from '../shared/Tags';
import * as dates from 'date-fns'
import { getHost } from './GridItem';

interface Props {
  item: any
}

function SimpleGridItem({item}: Props) {
  const keywords = item.keywords.trim().length ? item.keywords.split(',') : null

  const tags = (keywords ) ?? item.queries;

  return (
    <div className="mb-2 sm:mb-0 px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 flex flex-col justify-between">
      <Link href={`/story/${item.id}`}>
        <a>
          <div className="flex items-center justify-between">
            <span className="text-sm font-light text-gray-600 dark:text-gray-400">{dates.formatDistanceToNow(new Date(item?.time)) || ''}</span> 
            <a className="px-3 py-1 font-base text-gray-100 transition-colors duration-200 text-xs transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">{item.category ?? ''}</a>
          </div> 
          <div className="mt-2">
            <a href="#" className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">{item.titles[0]}</a> 
            <p className="mt-2 dark:text-gray-300 text-slate-400 font-light text-sm ">{item.descriptions[0]?.slice(0, 150) || ''}</p>
            <div className='mt-2'>
              <Tags tags={tags?.slice(0, 5) || []} />  
            </div>
          </div> 
          <div className="flex items-center justify-between mt-4">
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Read more ⟶</a> 
            <div className="flex items-center">
              <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">{getHost(item.source)}</a>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default SimpleGridItem