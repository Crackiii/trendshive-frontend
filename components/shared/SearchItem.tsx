/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import Link from 'next/link'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { getFaviconByUrl, getHost, validURL } from '../../utils/common'
import { useImage } from '../../utils/hooks'

interface Props {
  item: any
  isLoading: boolean
}

function SearchItem({item, isLoading} : Props) {

  const {image} = useImage(item.images?.find(validURL) || getFaviconByUrl(item.url))
  const description = getHost(item.url) || item.descriptions[0] || ''
  const title = item.title

  return (
    <Link href={`/story/${item.id}`} passHref>
      <span>
      <a target='_blank' rel="noreferrer">
        <div className='grid grid-rows-1 gap-0 grid-cols-12 border-b border-slate-100 py-4 relative group cursor-pointer' >
          <div className={`row-start-1 col-start-1 col-span-2 md:col-span-1 h-14 w-14 flex flex-col rounded-2xl overflow-hidden relative ${!isLoading && 'shadow-lg shadow-slate-400'}`}>
            {isLoading ? 
            <Skeleton height={'3.7rem'} width={'3.5rem'} style={{display: 'inline-block'}} /> : 
            <img className='object-cover min-w-full min-h-full' src={image} alt={title} />}
          </div>
          <div className='row-start-1 col-start-3 md:col-start-2 col-span-10 md:col-span-11 flex flex-col flex-2 justify-center pl-5'>
              <div className='text-md font-base text-slate-700 min-w-full group-hover:text-blue-500'>
              {isLoading ? <Skeleton height={'1.3rem'} /> : title} 
              </div>
              <div className='text-sm font-light text-slate-400 mt-1 tracking-wide min-w-full whitespace-nowrap overflow-hidden text-ellipsis'>
                {isLoading ? <Skeleton height={'.8rem'} className='mt-2' />: description}
              </div>
          </div>
      </div>
    </a>
    </span>
  </Link>
  )
}

export default SearchItem