import React from 'react'
import TopBar from '../../components/shared/TopBar'
import HomeFooter from '../../components/shared/HomeFooter'
import StoryContent from '../../components/StoryPage/StoryContent'
import RelatedArticles from '../../components/StoryPage/RelatedArticles'
import MoreInteresting from '../../components/StoryPage/MoreInteresting'
import TrendingHeading from '../../components/shared/TrendingHeading'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

function Story({story, videos, news}: {story: any, videos: any, news: any}) {

  const metas = story?.social

  console.log(story.title)

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
      </Head>
      <TopBar />
      <div className='grid grid-cols-1 gap-4 grid-rows-1 md:grid-cols-5 md:p-10'>
        <StoryContent className='col-start-1 col-span-5 md:col-span-3 overflow-hidden' story={story} />
        <div className={'col-start-1 col-span-5 md:col-span-2 xl:col-span-1 md:col-start-4 '}>
          <RelatedArticles articles={story.related_articles || []}  />

          <RelatedArticles className='mt-10' articles={news || []}  />

          <RelatedArticles className='mt-10' articles={videos}  />
        </div>
      </div>
      <div className='md:p-10'>
        <TrendingHeading title='More popular topics' />
        <MoreInteresting allStories={story.allStories} /> 
      </div>
      <HomeFooter  />
    </>
  )
}

export default Story

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const {params} = ctx;

  const id = params?.id
  const res = await fetch(`https://trendscads-backend.herokuapp.com/story/${id}`, {method: 'GET'}).then(res => res.json())

  const title = res.websiteData?.title
  const encodedtitle = `${title}`

  const videos = await fetch(`https://trendscads-backend.herokuapp.com/search/videos?searchQuery=${encodedtitle}`, {method: 'GET'})
                  .then(res => res.json()).catch(e => [])
  const news = await fetch(`https://trendscads-backend.herokuapp.com/search/news?searchQuery=${encodedtitle}`, {method: 'GET'})
                  .then(res => res.json()).catch(e => [])

  return {
    props: {
      story: res.websiteData,
      videos,
      news
    }
  }

}