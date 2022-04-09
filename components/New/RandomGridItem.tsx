/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useState } from 'react'
import { getHost } from '../../utils/common'
import { useImage } from '../../utils/hooks'

interface Props {
  item: any
}

function RandomGridItem({item}: Props) {

  const {image} = useImage(item.imageUrl)
  const source = getHost(item.url)
  const correctDescription = ''
  const date = item.time
  const category = ''
  const title = item.title || ''
  
  return (
    <div className="break-inside bg-white flex flex-col justify-star px-8 py-8 group cursor-pointer" style={{marginBottom: '1rem'}}>
      <Link href={item.url} passHref>
        <span>
        <a target={'_blank'}>
          <div className='flex justify-between'>
            <div className=' w-28 h-28 overflow-hidden rounded-lg shadow-2xl'>
              <img src={image} alt='img' className=' object-cover min-h-full min-w-full' />
            </div>
            <div className='flex flex-col justify-start'>
              <div className='flex justify-end'>
                {
                  Boolean(category) &&
                  <span className='text-xs bg-slate-700 hover:bg-slate-800 text-white inline-block min-w-fit py-1 px-2 text-center rounded-md'>{category}</span>
                }
              </div>
              <div className='text-xs text-slate-300 text-right mt-5'>{date}</div>
              <div className='text-sm text-blue-400 text-right mt-3'>{source}</div>
            </div>
          </div>
          <div className='text-xl font-bold group-hover:text-blue-400 group-hover:underline mt-5' dangerouslySetInnerHTML={{__html: title}}></div>
          <div className='text-base font-light text-slate-500 mt-5 overflow-hidden'>{correctDescription}</div>
        </a>
        </span>
      </Link>
    </div>
  )
}

export default RandomGridItem