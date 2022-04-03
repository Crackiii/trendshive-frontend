import React from 'react'
import TopBar from '../../components/shared/TopBar'
import HomeFooter from '../../components/shared/HomeFooter'
import StoryContent from '../../components/StoryPage/StoryContent'
import RelatedArticles from '../../components/StoryPage/RelatedArticles'
import MoreInteresting from '../../components/StoryPage/MoreInteresting'
import TrendingHeading from '../../components/shared/TrendingHeading'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import extractor from 'keyword-extractor'

function Story({story, videos, news}: {story: any, videos: any, news: any}) {

  const metas = story?.social

  const facebookMappedMetas = metas?.[0]?.map((meta: any) => {
    if(/url/gmi.test(meta.property)) {
      meta['content'] = `https://trendscads.com`
    }
    if(/site/gmi.test(meta.property)) {
      meta['content'] = `trendscads.com`
    }
    return meta
  }) || []

  const twitterMappedMetas =  metas?.[1]?.map((meta: any) => {
    if(/url/gmi.test(meta.property)) {
      meta['content'] = `https://trendscads.com`
    }
    if(/site/gmi.test(meta.property)) {
      meta['content'] = `https://trendscads.com`
    }
    return meta
  }) || []

  return (
    <>
      <Head>
        <title>{story?.title}</title>
        {
          facebookMappedMetas.map((m: any, index: number) => (
            <meta property={m.property} content={m.content} key={index} />
          ))
        }
        {
          twitterMappedMetas.map((m: any, index: number) => (
            <meta property={m.property} content={m.content} key={index} />
          ))
        }
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <div className='grid grid-cols-1 gap-4 grid-rows-1 md:grid-cols-5 md:p-10'>
        <StoryContent className='col-start-1 col-span-5 md:col-span-3 overflow-hidden' story={story} /> 
        <div className={'col-start-1 col-span-5 md:col-span-2 xl:col-span-1 md:col-start-4 '}>
          {news.length > 0 && <RelatedArticles articles={news || []} title={'Related News'} /> }
          {videos.length > 0 && <RelatedArticles className='mt-10' title={'Related Videos'} articles={videos || []}  /> }
          {story.related_articles.length > 0 && <RelatedArticles className='mt-10' title={'Related Articles'} articles={story.related_articles || []}  /> }
        </div>
      </div>
      {
        story?.allStories?.length && 
        <div className='md:p-10'>
          <TrendingHeading title='More popular topics' />
          <MoreInteresting allStories={story?.allStories || []} /> 
        </div>
      }
      
      <HomeFooter  />
    </>
  )
}

export default Story

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const {params} = ctx;

  const id = params?.id
  const res = await fetch(`https://trendscads-backend.herokuapp.com/story/${id}`, {method: 'GET'}).then(res => res.json())

  if(res.error) {
    return {
      notFound: true
    }
  }
    
  const title = res?.websiteData?.title || ''
  const splittedTitle = extractor.extract(title, {remove_digits: true, return_changed_case: true, remove_duplicates: true})
  const encodedtitle = splittedTitle.length > 5 ? splittedTitle.slice(0, 5)  : splittedTitle;

  const videos = await fetch(`https://trendscads-backend.herokuapp.com/search/videos?searchQuery=${encodedtitle}`, {method: 'GET'})
                  .then(res => res.json()).catch(e => [])
  const news = await fetch(`https://trendscads-backend.herokuapp.com/search/news?searchQuery=${encodedtitle}`, {method: 'GET'})
                  .then(res => res.json()).catch(e => [])

  return {
    props: {
      story: res?.websiteData,
      videos: videos,
      news: news
    }
  }

}