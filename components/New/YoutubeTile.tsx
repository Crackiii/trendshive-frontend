/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useImage } from '../../utils/hooks'
import Tags from '../shared/Tags'

function YoutubeTile({item}: any) {

  const {image} = useImage(item.imageUrl)
  
  return (
    <div className="bg-white cursor-pointer rounded-md overflow-hidden relative">
      <div className="block rounded-md w-full h-52 overflow-hidden">
        <img src={image} alt={item.title} className={'w-full bg-cover'} />
      </div>
      <div className='text-base font-normal p-5'>{item.title}</div>
      <div className='text-base font-light text-slate-300 absolute top-2 right-2 '>
        <Tags tags={[item.time]} />
      </div>
    </div>
  )
}

export default YoutubeTile