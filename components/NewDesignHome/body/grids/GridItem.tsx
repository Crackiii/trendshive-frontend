/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
interface Props {
  item: any
}


function GridItem({item}: Props) {
  const image = item.image

  return (
    <div className='h-96 sm:h-auto w-full relative group overflow-hidden rounded-md '>
      <Link href={`/story/${item.category}/${item.type}/${item.id}`} passHref>
          <a target={'_blank'}>
            <div className='w-full h-full min-h-full min-w-full relative sm:group-hover:scale-125 transition'>
              <img src={image} alt='image' className='object-cover w-full min-w-full h-full min-h-full' />
            </div>
            <div className='absolute z-10 group top-0 left-0 w-full h-full bg-slate-900 bg-opacity-60 hover:bg-opacity-70 flex flex-col justify-end cursor-pointer overflow-hidden'>
              <div className='p-2'>
                <div className='text-lg text-white mb-2 group-hover:first:text-blue-400 group-hover:first:underline break-words' dangerouslySetInnerHTML={{__html: item.title}}></div>
                <div className=' text-gray-300 text-xs font-light mb-2 tracking-wider break-words' dangerouslySetInnerHTML={{__html: item.description.slice(0, 50)}}></div>
                <div className=' text-white text-xs mb-1 font-mono text-right'>
                  {item.source}
                </div>
              </div>
            </div>
          </a>
      </Link>

    </div>
  )
}

export default GridItem