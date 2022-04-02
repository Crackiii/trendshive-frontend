/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
import { getHost } from '../../utils/common';
import { useImage } from '../../utils/hooks';
import { validURL } from './HomePage';

interface Props {
  item: any
}


function GridItem({item}: Props) {
  const title = item.title.substr(0, 60)
  const {image} = useImage(item.images.find(validURL))
  const description = item.descriptions?.[0]?.substr(0, 100).trim() || ''
  const source = getHost(item.source)

  return (
    <div className='h-96 sm:h-auto w-full border relative group overflow-hidden '>
      <Link href={`/story/${item.id}`} passHref>
        <span><a>
          <div className='w-full h-full min-h-full min-w-full relative sm:group-hover:scale-125 transition'>
            <img src={image} alt='image' className='object-cover w-full min-w-full h-full min-h-full' />
          </div>
          <div className='absolute group top-0 left-0 w-full h-full bg-slate-900 bg-opacity-60 hover:bg-opacity-70 flex flex-col justify-end cursor-pointer overflow-hidden'>
              <div className='p-2'>
                  <div className='font-bold text-lg text-white mb-2 group-hover:first:text-blue-400 group-hover:first:underline'>
                    {title}
                  </div>
                  <div className=' text-gray-300 text-sm font-light mb-2 tracking-wider'>
                    {description}
                  </div>
                  <div className=' text-white text-xs mb-1 font-mono text-right'>
                    {source}
                  </div>
              </div>
          </div>
        </a>
        </span>
      </Link>
    </div>
  )
}

export default GridItem