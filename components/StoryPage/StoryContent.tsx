/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { getFaviconByUrl } from '../HomePage/SmallGridItem'
import Tags from '../shared/Tags'
import RelatedQueries from './RelatedQueries'
import RelatedSearches from './RelatedSearches'
import  HtmlPage from './HtmlPage'
import * as dates from 'date-fns'


type Content = {
  titles: string[]
  keywords: string[]
  url: string
  images: string[]
  html: string
  time: string
  author: string
  favicon: string
  videos: string[]
  category: string
  country: string
  youtube_video: string
}

interface Props {
  content: Content
  related_queries?: string[]
  related_searches?: any[]
}

const validURL = (str: string) =>  {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

  return !!pattern.test(str);
}

const getHostUrl = (url: string) => {
  if(!validURL(url)) return {host: '', url: ''}

  const link = new URL(url)

  return {host: link.host, url}
}

function StoryContent(props: Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {

  const {content, ...rest} = props

  const keywords = content?.keywords?.filter(k => Boolean(k.trim().length)) || []
  const related_queries = props.related_queries?.filter((q => Boolean(q.trim().length))) || []
  const related_articles = props.related_searches || []
  const {url, host} = getHostUrl(content?.url)
  const favicon = getFaviconByUrl(content?.url) || validURL(content?.favicon)  && content?.url || '/fallback.png'
  const image = content?.images?.filter(validURL)?.[0] || favicon


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
        <div className='text-4xl font-bold'>{content?.titles?.[0]}</div>
        
        {
          (keywords.length) > 0 ? 
          <div className='mt-5'>
            <Tags tags={content?.keywords || []} />
          </div> : null
        }
        
        {
          content?.author || content?.time &&
          <div className='text-sm mt-5 text-right'>
            <span className=' text-slate-400'>{dates.formatDistanceToNow(new Date(content?.time))} ago </span> 
            <span>{content?.author && 'by'} </span>
            <span className=' font-medium'>{content?.author}</span>
          </div>
        }

        <div className='text-sm mt-5 flex justify-between'>

          <div>
            {content?.category &&
              <span className='text-sm text-white bg-slate-600 hover:bg-slate-700 cursor-default px-3 py-1 rounded-md'>{content?.category}</span>
            }
          </div>
          
          <div className='flex justify-end w-full'>
            <span className='block w-5 h-5 rounded-full overflow-hidden'>
              <img className=' object-cover min-h-full min-w-full' src={favicon} onError={(ev) => ev.currentTarget.src = favicon} alt='favicon'/>
            </span>
            <span className='ml-3 text-blue-400'><a href={url}>{host}</a></span>
          </div>

        </div>
        {
          (content?.videos?.length || [].length) > 0 && 
          <div className='mt-5'>
            <iframe className='w-full h-96' src={content?.videos[0]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading='lazy' allowFullScreen />  
          </div>
        }


        <div className='mt-5'>
          <div className='w-full flex justify-center'>
            <img className='block' src={image} alt='image' onError={(ev) => ev.currentTarget.src = '/fallback.png'} />
          </div>
        </div>

        <HtmlPage html={content?.html} image={image} />
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
       
        <RelatedSearches articles={related_articles} className={'mt-10'} />
      </div>
    </div>
  )
}

export default StoryContent