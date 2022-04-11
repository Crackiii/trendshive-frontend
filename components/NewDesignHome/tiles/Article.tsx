/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useImage } from '../../../utils/hooks'

interface Props {
  article: any
}

function Article(props: Props) {

  const {image} = useImage(props.article.imageUrl)

  return (
    <div className=' w-72  bg-white p-2 rounded-md inline-block mr-5'>
      <div className='flex justify-between items-start'>
        <div className='w-20 h-20 overflow-hidden rounded-lg shadow-slate-300 shadow-xl'>
          <img src={image} className='object-cover min-h-full min-w-full' alt='image' />
        </div>
        <div className='flex flex-col items-end justify-between h-20'>
          <div className='text-xs text-slate-400'>{props.article.time}</div>
          <div className='text-xs text-sky-500'>{props.article.source}</div>
        </div>
      </div>
      <div className='whitespace-normal mt-3 text-slate-600 text-base font-normal' dangerouslySetInnerHTML={{__html: props.article.title.slice(0, 60)}}></div>
      <div className='text-xs text-sky-500 text-right'>Read more</div>
    </div>
  )
}

export default Article