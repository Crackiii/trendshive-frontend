/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { getFaviconByUrl, getHost } from '../../utils/common'

interface Props {
  item?: any
  background?: string
}

function ListItem({item, background}: Props) {

  const favicon = getFaviconByUrl(item?.url || item?.link)
  const source = getHost(item?.url || item?.link)
  const sourceCorrect = item?.source || source
  const image = item?.imageUrl || favicon
  const title = item?.title
  const description = item?.description || item?.snippet
  const time = item.time
  
  
  return (
    <Link href={item?.url || item?.link} >
      <a target={'_blank'}>
        <div className={`grid grid-cols-8 grid-rows-1 p-2 group relative cursor-pointer ${background ?? 'bg-white'}`}>
          <div className='col-span-2 flex'>
            <div className='w-16 h-16 relative overflow-hidden rounded-xl shadow-lg shadow-slate-400'>
              <img src={image} alt='image' onError={(ev) => ev.currentTarget.src = favicon} className='min-h-full min-w-full object-cover' />
              {
                item?.isVideo && 
                <div className='absolute left-0 top-0 flex flex-col justify-center items-center z-10 w-full h-full bg-slate-500 bg-opacity-50'>
                  <img src={'/play.png'} alt='img' className='object-cover w-10 h-10' />
                </div>
              }
            </div>
          </div>

          <div className='col-start-3 col-span-6'>
            <div className='text-sm group-hover:text-blue-600'>{title}</div>
            <div className='text-xs w-full overflow-hidden text-ellipsis whitespace-nowrap mt-2 text-slate-400'>{description}</div>
          </div>
          <div className='col-start-1 col-span-5 mt-4 text-blue-400 font-light text-sm text-right lowercase'>
            <div className='flex justify-start w-full text-ellipsis whitespace-nowrap '>
              <div className='rounded-full overflow-hidden w-4 h-4 mr-2'>
                <img className='bg-cover min-h-full min-w-full' src={favicon} alt={'source'} />
              </div>
              <span>{sourceCorrect}</span>
            </div>
          </div>
          <div className='col-start-6 col-span-3 mt-4 text-slate-400 font-light text-sm flex justify-end'>{time}</div>
        </div>
      </a>
    </Link>
  )
}

export default ListItem