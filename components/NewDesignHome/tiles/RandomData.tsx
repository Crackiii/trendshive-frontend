/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { useImage } from '../../../utils/hooks'

interface Props {
  content: any
  width?: string
}

function Youtube(props: Props) {

  const {image} = useImage(props.content.image_url || props.content.thumbnail_sm)
  const url = /watch\?v=/.test(props.content.url) ? `https://youtube.com${props.content.url}` : props.content.url
  return (
    <Link href={url}>
      <a target={'_blank'}>
        <div className={`${props.width || 'w-48 mr-4' } inline-block rounded-lg group overflow-hidden font-light cursor-pointer hover:shadow-xl hover:shadow-zinc-200 transition-shadow`} >
          {
            image !== '/fallback.png' &&
            <div className='w-full rounded-lg overflow-hidden'>
              <img src={image} alt='icon' className='object-cover min-h-full min-w-full' />
            </div>
          }
          <div className='px-3 pb-4'>
            <div className='flex flex-row justify-between items-center text-xs py-2'>
              <div className='text-sky-500'>#{props.content.source || props.content.channel_name}</div>
              <div className='text-slate-400'>{props.content.time}</div>
            </div>
            <div className='text-slate-600 text-base font-normal group-hover:underline group-hover:text-sky-500'>
              <div className=' whitespace-normal' dangerouslySetInnerHTML={{__html: props.content.title}}></div>
            </div>
            <div className='text-slate-600 text-xs mt-2 font-light'>
              <div className=' whitespace-normal tracking-wide' dangerouslySetInnerHTML={{__html: props.content.description}}></div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Youtube