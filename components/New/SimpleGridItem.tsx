/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
import Tags from '../shared/Tags';

interface Props {
  item: any
}

function SimpleGridItem({item}: Props) {

  const keywords = ''
  const tags: string[] = []
  const source = item?.source
  const time = item?.time
  const description = ''
  const descriptionText = ''
  const title = item?.title
  const category = item?.source;
return (
  <div className="mb-2 sm:mb-0 px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800 border">
      <Link href={item.url} passHref>
        <span>
        <a className='flex flex-col justify-between'>
   
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">{time}</span> 
        <a className="px-3 py-1 font-base text-gray-100 transition-colors duration-200 text-xs transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">{category}</a>
      </div> 
      <div className="mt-2">
        <a href="#" className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" dangerouslySetInnerHTML={{__html: title}}></a> 
        <p className="mt-2 dark:text-gray-300 text-slate-400 font-light text-sm ">{descriptionText}</p>
        <div className='mt-2'>
          <Tags tags={tags} />  
        </div>
      </div> 
      <div className="flex items-center justify-between mt-4">
        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Read more ⟶</a> 
        <div className="flex items-center">
          <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">{source}</a>
        </div>
      </div>
    </a>
    </span>
      </Link>
      </div>
  )
}

export default SimpleGridItem