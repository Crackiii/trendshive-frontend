/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useImage } from '../../../utils/hooks'
import * as dates from 'date-fns'
import { getHost } from '../../../utils/common'
import Link from 'next/link'

interface Props {
  article: any
  width?: string
}

function Article(props: Props) {

  const {image} = useImage(props.article?.image_url)
  const time = props.article?.time === '-' ? dates.formatDistanceToNow(props.article?.created_at) : props.article?.time
  const source = props.article?.source === '-' ? getHost(props.article?.url) : props.article?.source

  return (
    <Link href={props.article.url}>
      <a target={'_blank'}>
        <div className={`${props.width || 'w-72 mr-5' } bg-white p-2 rounded-md inline-block `}>
          <div className='flex justify-between items-start'>
            <div className='w-20 h-20 overflow-hidden rounded-lg shadow-slate-300 shadow-xl'>
              <img src={image} className='object-cover min-h-full min-w-full' alt='image' />
            </div>
            <div className='flex flex-col items-end justify-between h-20'>
              <div className='text-xs text-slate-400'>{time}</div>
              <div className='text-xs text-sky-500'>{source}</div>
            </div>
          </div>
          <div className='whitespace-normal mt-3 text-slate-600 text-base font-normal' dangerouslySetInnerHTML={{__html: props.article?.title.slice(0, 60)}}></div>
          <div className='text-xs text-sky-500 text-right'>Read more</div>
        </div>
      </a>
    </Link>
  )
}

export default Article