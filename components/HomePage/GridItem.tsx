/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
import { validURL } from './HomePage';

interface Props {
  item: any
}

export const getHost = (url: string) => {
  const isValidUrl = validURL(url)

  if(!isValidUrl) return '-'

  const host = new URL(url).host

  return host
}

function GridItem({item}: Props) {
  return (
    <div className='h-96 sm:h-auto w-full border relative group overflow-hidden '>
      <Link href={`/story/${item.id}`}>
        <a>
          <div className='w-full h-full min-h-full min-w-full relative sm:group-hover:scale-125 transition'>
            <img src={item.images?.[0]} alt='image' className='object-cover w-full min-w-full h-full min-h-full' />
          </div>
          <div className='absolute group top-0 left-0 w-full h-full bg-slate-900 bg-opacity-60 hover:bg-opacity-70 flex flex-col justify-end cursor-pointer overflow-hidden'>
              <div className='p-2'>
                  <div className='font-bold text-lg text-white mb-2 group-hover:first:text-blue-400 group-hover:first:underline'>
                    {item.titles?.[0].substr(0, 60)}
                  </div>
                  <div className=' text-gray-300 text-sm font-light mb-2 tracking-wider'>
                    {item.descriptions?.[0]?.substr(0, 100).trim() || ''}
                  </div>
                  <div className=' text-white text-xs mb-1 font-mono text-right'>
                    {getHost(item.source)}
                  </div>
              </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default GridItem