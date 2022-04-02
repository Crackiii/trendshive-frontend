/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useState } from 'react'
import { validURL } from './HomePage'
import * as dates from 'date-fns'
import Tags from '../shared/Tags'
import { getFaviconByUrl, getHost } from '../../utils/common'
import { useImage, useTime } from '../../utils/hooks'
import YoutubeModal from '../shared/YoutubeModal'

interface Props {
  item: any
}

function RandomGridItem({item}: Props) {

  const favicon = getFaviconByUrl(item.url || item.source) || validURL(item.favicon) && item.favicon
  const keywords = item.keywords?.trim().length ? item.keywords.split(',').slice(0,5) : item.queries?.slice(0,5) || []
  const {image} = useImage(item.image || item.images?.medium || item?.images?.find(validURL) || favicon)
  const source = getHost(item.url || item.source || item.content)
  const description = (item.description)?.slice(0, 100) || item.descriptions?.find((d: string) => !validURL(d)) || item.short_description || item.excerpt
  const correctDescription = (description !== 'undefined' || description !== undefined ? description : '')?.trim()
  const date = useTime(item.relative_time || item?.date || item?.time || item?.published || Date.now())
  const category = item.category || ''
  const title = item.title || ''
  const isVideo = item.embed_html || item.embed_url || /youtube.com/gmi.test(source)
  const isExternalLink = !item.id
  const externalUrl = item.embed_url || item.url || item.content

  const [showYoutubePlayer, setShowYoutubePlayer] = useState(false)
  
  return (
    <div className="break-inside bg-white flex flex-col justify-star px-8 py-8 group cursor-pointer" style={{marginBottom: '1rem'}}>
      <Link href={isExternalLink ? externalUrl || '' :`/story/${item.id}` || ''} passHref>
        <span>
        <a target={'_blank'} onClick={(ev) => {
          if (isVideo) {
            ev.preventDefault()
            setShowYoutubePlayer(true)
          }
        }}>
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
              <div className='text-xs text-slate-300 text-right mt-5'>{date} ago</div>
              <div className='text-sm text-blue-400 text-right mt-3'>{source}</div>
            </div>
          </div>
          <div className='text-xl font-bold group-hover:text-blue-400 group-hover:underline mt-5'>{title}</div>
          <div className='text-base font-light text-slate-500 mt-5'>{correctDescription}</div>
          <div className='mt-5'>
            <Tags tags={keywords} />
          </div>
        </a>
        </span>
      </Link>
      {showYoutubePlayer && <YoutubeModal open={showYoutubePlayer} onClose={setShowYoutubePlayer} url={externalUrl} />}
    </div>
  )
}

export default RandomGridItem