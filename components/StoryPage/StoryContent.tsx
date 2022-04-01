/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Tags from '../shared/Tags'
import RelatedQueries from './RelatedQueries'
import RelatedSearches from './RelatedSearches'
import  HtmlPage from './HtmlPage'
import * as dates from 'date-fns'
import { getFaviconByUrl, getHost, validURL } from '../../utils/common'
interface Props {
  story: any
}


function StoryContent(props: Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {

  const {story, ...rest} = props

  const keywords = story?.keywords?.filter((k: string) => Boolean(k.trim().length)) || []
  const related_queries = story.related_queries?.filter(((q: string) => Boolean(q.trim().length))) || []
  const related_links = story.links || []
  const source = getHost(story?.url)
  const url = story?.url
  const favicon = getFaviconByUrl(story?.url) || validURL(story?.favicon)  && story?.url || '/fallback.png'
  const image = story?.images?.filter(validURL)?.[0] || favicon
  const time = dates.formatDistanceToNow(new Date(story?.time))
  const category = story.category
  const [video] = story.videos || []


  return (
    <div {...rest}>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7718309551494678"
          crossOrigin="anonymous"></script>
      <ins className="adsbygoogle"
          style={{display:"block", textAlign:"center"}}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-7718309551494678"
          data-ad-slot="8672063873"></ins>
      <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
      <div className='bg-white px-10 py-10 lg:px-20 lg:py-16'>
        <div className='text-4xl font-bold'>{story?.title}</div>
        
        {
          (keywords.length) > 0 ? 
          <div className='mt-5'>
            <Tags tags={keywords || []} />
          </div> : null
        }
        
        {
          time &&
          <div className='text-sm mt-5 text-right'>
            <span className=' text-slate-400'>{time} ago </span> 
          </div>
        }

        <div className='text-sm mt-5 flex justify-between'>

          <div>
            {category &&
              <span className='text-sm text-white bg-slate-600 hover:bg-slate-700 cursor-default px-3 py-1 rounded-md'>{category}</span>
            }
          </div>
          
          <div className='flex justify-end w-full'>
            <span className='block w-5 h-5 rounded-full overflow-hidden'>
              <img className=' object-cover min-h-full min-w-full' src={favicon} onError={(ev) => ev.currentTarget.src = favicon} alt='favicon'/>
            </span>
            <span className='ml-3 text-blue-400'><a href={url}>{source}</a></span>
          </div>

        </div>
        {
          video && 
          <div className='mt-5'>
            <iframe className='w-full h-96' src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading='lazy' allowFullScreen />  
          </div>
        }


        <div className='mt-5'>
          <div className='w-full flex justify-center'>
            <img className='block' src={image} alt='image' onError={(ev) => ev.currentTarget.src = '/fallback.png'} />
          </div>
        </div>

        <HtmlPage html={story.html} image={image} />

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7718309551494678"
            crossOrigin="anonymous"></script>
        <ins className="adsbygoogle"
            style={{display:"block"}}
            data-ad-format="autorelaxed"
            data-ad-client="ca-pub-7718309551494678"
            data-ad-slot="1134115510"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>

        {
          related_queries.length > 0 && 
            <RelatedQueries tags={related_queries} className={'mt-10'} />
        }

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7718309551494678"
            crossOrigin="anonymous"></script>
        <ins className="adsbygoogle"
            style={{display:"block"}}
            data-ad-format="autorelaxed"
            data-ad-client="ca-pub-7718309551494678"
            data-ad-slot="1134115510"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
       
        <RelatedSearches articles={related_links} className={'mt-10'} />
      </div>
    </div>
  )
}

export default StoryContent