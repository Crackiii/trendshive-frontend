/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { getYoutubeEmbedUrl } from '../../../utils/common'
import { useImage } from '../../../utils/hooks'
import YoutubeModal from '../../shared/YoutubeModal'

interface Props {
  video: any
  width?: string
}

function Youtube(props: Props) {

  const [open, setOpen] = React.useState(false)
  const {image} = useImage(props.video.thumbnail_sm)

  return (
    <Link href={`https://youtube.com${props.video.url}`}>
      <a target={'_blank'}>
        <div className={`${props.width || 'w-48 mr-4' } inline-block rounded-lg overflow-hidden font-light cursor-pointer`} onClick={() => setOpen(true)} >
          <div className='w-full rounded-lg overflow-hidden'>
            <img src={image} alt='icon' className='object-cover min-h-full min-w-full' />
          </div>
          <div className='flex flex-row justify-between items-center text-xs py-2'>
            <div className='text-sky-500'>#{props.video.channel_name}</div>
            <div className='text-slate-400'>{props.video.time}</div>
          </div>
          <div className='text-slate-600 text-sm font-normal'>
            <div className=' whitespace-normal' dangerouslySetInnerHTML={{__html: props.video.title}}></div>
          </div>
          {/* <YoutubeModal onClose={() => setOpen(false)} open={open} url={getYoutubeEmbedUrl(props.video.url)} /> */}
        </div>
      </a>
    </Link>
  )
}

export default Youtube