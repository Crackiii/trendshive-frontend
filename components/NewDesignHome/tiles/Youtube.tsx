/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useImage } from '../../../utils/hooks'

interface Props {
  video: any
}

function Youtube(props: Props) {

  const {image} = useImage(props.video.imageUrl)

  return (
    <div className='inline-block w-48 rounded-lg overflow-hidden font-light mr-4' >
      <div className='w-full rounded-lg overflow-hidden'>
        <img src={image} alt='icon' className='object-cover min-h-full min-w-full' />
      </div>
      <div className='flex flex-row justify-between items-center text-xs py-2'>
        <div className='text-sky-500'>#Category</div>
        <div className='text-slate-400'>{props.video.time}</div>
      </div>
      <div className='text-slate-600 text-base font-normal'>
        <div className=' whitespace-normal' dangerouslySetInnerHTML={{__html: props.video.title.slice(0, 35)}}></div>
      </div>
    </div>
  )
}

export default Youtube