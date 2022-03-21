/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Tags from '../shared/Tags'
import { related_queries, story } from './data'
import RelatedQueries from './RelatedQueries'
import RelatedSearches from './RelatedSearches'

type Content = {
  title: string
  keywords: string
  source: string
  images: string[]
  html: string
  time: string
  author: string
  favicon: string
  videos: string
  category: string
  country: string
  youtube_video: string
}

interface Props {
  content?: Content
}

function StoryContent(props: Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {

  const {content, ...rest} = props


  return (
    <div {...rest}>
      <div className='bg-white px-10 py-10 lg:px-20 lg:py-16'>
        <div className=' text-4xl font-bold'>
          {content?.title}
          Convert HEIC to JPG in Mac With Automator & Keyboard Shortcut
        </div>
        <div className='mt-5'>
          <Tags tags={['format', 'image', 'heic', 'jpg', 'HEIC', 'image-replacement']} />
        </div>
        <div className='text-sm mt-5 text-right'>
          <span className=' text-slate-400'>{content?.time ?? '5 Days ago'} </span> {content?.author ?? 'by'} <span className=' font-medium'>{content?.author ?? 'Jaxon Dante'}</span>
        </div>
        <div className='text-sm mt-5 flex justify-between'>
          <div className=' text-sm text-white bg-slate-600 hover:bg-slate-700 cursor-default px-3 py-1 rounded-md'>{content?.category ?? 'Business'}</div>
          <div className='flex justify-end'>
            <span className='block w-5 h-5'>
              <img className=' object-cover min-h-full min-w-full' src={content?.favicon ?? 'https://ssl.gstatic.com/adsense/apps/static/bidi/adsense3_antipasti_server_20220316-04_RC00/common/resources/favicon.ico'} alt='favicon'/>
            </span>
            <span className='ml-3 text-blue-400'>{content?.source ?? 'www.google.com'}</span>
          </div>
        </div>
        <div className='mt-5'>
          <iframe className='w-full h-96' src="https://www.youtube.com/embed/0KH04uQG5QI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading='lazy' allowFullScreen />  
        </div>
        <div className='mt-5'>
          <div className=' shadow-xl shadow-slate-500 w-full'>
            <img className=' min-w-full' src='https://cdn.vox-cdn.com/thumbor/nadfXSJruagu1oJJPOnktk2dHKU=/0x0:2002x1335/920x613/filters:focal(841x508:1161x828):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70650775/vpavic_210916_4760_0240.0.jpg' alt='image' />
          </div>
        </div>
        <div className={`text-lg font-light tracking-wide ${Boolean(content?.images.length) ? 'mt-8' : 'mt-5'} mt-10`}>
          {content?.html}
          High-Efficiency Image Format (HEIC) is the new image format that Apple is now using as a replacement for JPG with the iOS 11. As compared to JPG, HEIC images have smaller file size and higher image quality.
          However, JPG is still more widely-used and for sharing your images on apps that don’t accept HEIC format or saving them on your Mac for future use, you have to convert them to JPG.
          But there’s no reason to fret because, in this post, I’ll tell you about a quick and easy way to convert any number of HEIC format images into JPG. All it needs is a little customization through the Automator and you can have the ‘Convert to JPG’ option right in your context menu or even as a shortcut. Let’s take a look at the following steps.
        </div>
        <RelatedQueries tags={related_queries} className={'mt-10'} />
        <RelatedSearches articles={story.articles} className={'mt-10'} />
      </div>
    </div>
  )
}

export default StoryContent