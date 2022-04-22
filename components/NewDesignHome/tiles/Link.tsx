/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useImage } from '../../../utils/hooks'
import * as dates from 'date-fns'
import { getHost } from '../../../utils/common'
import Link from 'next/link'
interface Props {
  search: any
  width?: string
}

function Search(props: Props) {

  const {image} = useImage(props?.search?.image_url)
  const time = props.search?.time === '-' ? dates.formatDistanceToNow(new Date(props.search?.created_at)) : props.search?.time
  const source = props.search?.source === '-' ? getHost(props.search?.url) : props.search?.source
  
  return (
    <Link href={`/story/${props.search.category}/${props.search.type}/${props.search.id}`}>
      <a target={'_blank'}>
        <div className={`${props.width || 'w-96 pr-4'} border-r mr-4 inline-block`}>
          <div className='flex justify-between'>
            <div className='flex-1 pr-2'>
              <div className='whitespace-normal text-sky-500' dangerouslySetInnerHTML={{__html: props?.search?.title}}></div>
              <div className='whitespace-normal flex justify-start text-slate-400 text-xs my-1'>
                <div className=''>{source}</div>
                <span className='mx-2'>|</span>
                <div className=' whitespace-normal'>{time}</div>
              </div>
              <div  className='whitespace-normal text-slate-800 text-sm' dangerouslySetInnerHTML={{__html: props?.search?.description}}></div>
            </div>
            <div className='overflow-hidden rounded-xl flex flex-col justify-start' style={{width: '80px', height: "80px"}}>
              <img src={image} alt='bitcoin' className='object-cover min-h-full min-w-full '/>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Search