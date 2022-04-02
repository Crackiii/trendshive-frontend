/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useState } from 'react'
import { getFaviconByUrl, getHost, getYoutubeEmbedUrl } from '../../utils/common'
import { useTime } from '../../utils/hooks'
import YoutubeModal from '../shared/YoutubeModal'
interface Props {
  item?: any
  background?: string
}

interface ItemProps {
  image: string, 
  background?: string, 
  favicon: string, 
  title:string, 
  description: string, 
  time: string, 
  sourceCorrect: string
}

function Item({image, background, favicon, title, description, time, sourceCorrect, onClick}: ItemProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div onClick={onClick} className={`grid grid-cols-8 grid-rows-1 p-2 group relative cursor-pointer ${background ?? 'bg-white'}`}>
      <div className='col-span-2 flex'>
        <div className='w-16 h-16 relative overflow-hidden rounded-xl shadow-lg shadow-slate-400'>
          <img src={image} alt='image' onError={(ev) => ev.currentTarget.src = favicon} className='min-h-full min-w-full object-cover' />
        </div>
      </div>

      <div className='col-start-3 col-span-6'>
        <div className='text-sm group-hover:text-blue-600'>{title}</div>
        <div className='text-xs w-full overflow-hidden text-ellipsis whitespace-nowrap mt-2 text-slate-400' dangerouslySetInnerHTML={{__html: description}}></div>
      </div>
      <div className='col-start-1 col-span-5 mt-4 text-blue-400 font-light text-sm text-right lowercase'>
        <div className='flex justify-start w-full text-ellipsis whitespace-nowrap '>
          <div className='rounded-full overflow-hidden w-4 h-4 mr-2'>
            <img className='bg-cover min-h-full min-w-full' src={favicon} alt={'source'} />
          </div>
          <span>{sourceCorrect}</span>
        </div>
      </div>
      <div className='col-start-6 col-span-3 mt-4 text-slate-400 font-light text-sm flex justify-end'>{time}</div>
    </div>
  )
}

function ListItem({item, background}: Props) {

  const favicon = getFaviconByUrl(item?.url || item?.link || item?.content)
  const source = getHost(item?.url || item?.link || item?.content)
  const sourceCorrect = item?.source || source
  const image = item.images?.medium || item?.image || item?.imageUrl || favicon
  const title = item?.title
  const description = item?.description || item?.snippet || item?.excerpt
  const time = useTime(item.relative_time || item?.date || item?.time || item?.published)

  const externalUrl = getYoutubeEmbedUrl(item?.link || item.embed_url || item.url || item.content)
  const isVideo = /youtube.com/gmi.test(item?.link || item.embed_url || item.url || item.content)

  const [showYoutubePlayer, setShowYoutubePlayer] = useState(false)

  if(isVideo) {
    return (
      <div>
        {showYoutubePlayer && <YoutubeModal open={showYoutubePlayer} onClose={setShowYoutubePlayer} url={externalUrl} />}
        <Item onClick={() => setShowYoutubePlayer(true)} sourceCorrect={sourceCorrect} favicon={favicon} image={image} title={title} description={description} time={time} background={background} />
      </div>
    )
  }
  
  return (
    <Link href={item?.url || item?.link || ''} passHref>
      <span>
        <a target={'_blank'} >
          <Item sourceCorrect={sourceCorrect} favicon={favicon} image={image} title={title} description={description} time={time} background={background} />
        </a>
      </span>
    </Link>
  )
}

export default ListItem