/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { getHost, validURL } from '../../../utils/common'
import { useImage, useImageDimensions } from '../../../utils/hooks'
import * as dates from 'date-fns'
import { useWindowSize } from 'react-use'

interface Props {
  content: any
  width?: string
}


export const useSource = (sources: string[]) => {
  const url = sources.find(validURL)
  const text = sources.find(s => s !== '-')

  if(text) return text;

  if(url) {
    return getHost(url).replace('www.', '')
  }
}

function Youtube(props: Props) {
  const { width } = useWindowSize()
  const {image} = useImage(props.content.image_url || props.content.thumbnail_sm)
  const showImage = useImageDimensions(image)
  const url = /watch\?v=/.test(props.content.url) ? `https://youtube.com${props.content.url}` : props.content.url
  const source = useSource([props.content.source,  props.content.channel_name,  url])

  const dateInstance = new Date(props.content.time);
  const time = dateInstance instanceof Date && !isNaN(Number(dateInstance)) ? dates.formatDistanceToNow(new Date(props.content.time)) : props.content.time
  const description = props.content.description !== '-' ? props.content.description : ''

  return (
    <Link href={`/story/${props.content.category || props.content.catgory}/${props.content.type}/${props.content.id}`}>
      <a>
        <div className={`${!showImage && width < 600 && 'grid grid-cols-12'} bg-white rounded-lg group overflow-hidden font-light cursor-pointer hover:shadow-xl hover:shadow-zinc-200 transition-shadow`} >
          {
            image !== '/fallback.png' && width > 600 &&
            <div className='w-full rounded-lg overflow-hidden'>
              <img src={image} alt='icon' className='object-cover min-h-full min-w-full' />
            </div>
          }
          {
            !showImage && width < 600 && 
            <div className={`w-16 h-16 m-3 ${width < 420 ? 'col-span-3' : 'col-span-2'} rounded-lg overflow-hidden shadow-lg`}>
              <img src={image} alt='icon' className='object-cover min-h-full min-w-full' />
            </div>
          }
          <div className={`px-3 pb-4 ${width < 420 ? 'col-span-9' : 'col-span-10'}`}>
            <div className='flex flex-row justify-between items-center text-xs py-2'>
              <div className='text-sky-500'>#{source}</div>
              <div className='text-slate-400'>{time}</div>
            </div>
            <div className='text-slate-600 text-base font-normal group-hover:underline group-hover:text-sky-500'>
              <div className=' whitespace-normal break-words' dangerouslySetInnerHTML={{__html: props.content.title}}></div>
            </div>
            <div className='text-slate-600 text-xs mt-2 font-light'>
              <div className=' whitespace-normal tracking-wide break-words' dangerouslySetInnerHTML={{__html: description}}></div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Youtube