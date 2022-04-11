/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useImage } from '../../../utils/hooks'

interface Props {
  search: any
}

function Link(props: Props) {

  const {image} = useImage(props?.search?.imageUrl || props?.search?.image?.imageUrl)


  return (
    <div className='w-96 border-r pr-4 mr-4 inline-block'>
      <div className='flex justify-between'>
        <div className='flex-1 pr-2'>
          <div className='whitespace-normal text-sky-500' dangerouslySetInnerHTML={{__html: props?.search?.title}}></div>
          <div className='whitespace-normal flex justify-start text-slate-400 text-xs my-1'>
            <div className=''>{props?.search?.source}</div>
            <span className='mx-2'>|</span>
            <div className=' whitespace-normal'>{props?.search?.time || props?.search?.timeAgo}</div>
          </div>
          <div  className='whitespace-normal text-slate-800 text-sm' dangerouslySetInnerHTML={{__html: props?.search?.excerpt || props?.search?.snippet}}></div>
        </div>
        <div className='overflow-hidden rounded-xl flex flex-col justify-start' style={{width: '80px', height: "80px"}}>
          <img src={image} alt='bitcoin' className='object-cover min-h-full min-w-full '/>
        </div>
      </div>
    </div>
  )
}

export default Link