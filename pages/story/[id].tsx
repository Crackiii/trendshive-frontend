import React from 'react'
import TopBar from '../../components/shared/TopBar'
import HomeFooter from '../../components/shared/HomeFooter'
import StoryContent from '../../components/StoryPage/StoryContent'
import { story } from '../../components/StoryPage/data'
import RelatedArticles from '../../components/StoryPage/RelatedArticles'
import MoreInteresting from '../../components/StoryPage/MoreInteresting'
import TrendingHeading from '../../components/shared/TrendingHeading'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

function Story({res}: {res: any}) {

  const metas = res.websiteData?.social

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
        <title>{res.websiteData?.titles?.[0]}</title>
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
        <StoryContent className='col-start-1 col-span-5 md:col-span-3 overflow-hidden' content={{...res.websiteData, category: res.websiteData.category_short, country:res.websiteData.country}} related_queries={res.websiteData.related_queries} related_searches={res.websiteData.links} />
        <RelatedArticles articles={res.websiteData.related_articles || []} className={'col-start-1 col-span-5 md:col-span-2 xl:col-span-1 md:col-start-4 '} />
      </div>
      <div className='md:p-10'>
        <TrendingHeading title='More popular topics' />
        <MoreInteresting allStories={res.websiteData.allStories} />
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

  return {
    props: {
      res
    }
  }

}