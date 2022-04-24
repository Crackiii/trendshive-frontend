import axios from 'axios'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React from 'react'
import { adsBreakPoints, commonBreakPoints } from '../../../../components/NewDesignHome/body/category/Category'
import Page from '../../../../components/NewDesignHome/Page'
import { PageContextProvider } from '../../../../components/NewDesignHome/PageContext'
import RandomData from '../../../../components/NewDesignHome/tiles/RandomData'
import Tags from '../../../../components/shared/Tags'
import { categories, getYoutubeEmbedUrl, types } from '../../../../utils/common'
import Masonry from 'react-masonry-css'

function Story({data, type, category, related}: {related: any, data: any, type: string, category: string}) {

  return (
    <>
    <Head>
      <title>{data?.title || data?.[0]?.metaData?.title}</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
    <PageContextProvider>
      <Page left={
        <div className='overflow-hidden'>
          {
            type === 'video' &&
            (
              <div className='rounded-xl overflow-hidden'>
                <iframe 
                  style={{width: '100%'}}
                  className='h-96'
                  src={getYoutubeEmbedUrl(data.url)} title="YouTube video player" 
                  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen />
              </div>
            )
          }
          {
            (type === 'article' || type === 'search') &&
            <>
              <div className='w-full bg-white h-96 rounded-xl overflow-hidden relative'>
                <img src={data[0]?.metaData?.images?.[0] || `/images/${category}.jpeg`} className='object-cover min-h-full min-w-full' alt={category} />
                <div className={'absolute w-full h-full left-0 top-0 z-10 gradient-bg'}>
                  <div className='uppercase text-white font-black text-2xl flex flex-col justify-end px-10 pb-10 h-full'>{data[0]?.metaData?.title}</div>
                </div>
              </div>
              <div className='my-4'>
                <Tags tags={[...(data[0]?.metaData?.keywords || '').split(',')]} />
              </div>
              <div className='tracking-wider text-sm' dangerouslySetInnerHTML={{__html: data[0]?.html}}></div>
            </>
          }

          <div className='w-full mt-10'>
              <div className='px-16 text-slate-500 bg-white inline-block  mb-5 text-center py-2 rounded-md shadow-xl shadow-slate-200'>Might of your interest</div>
              <Masonry breakpointCols={adsBreakPoints} className="my-masonry-grid mb-3" columnClassName="my-masonry-grid_column">
                <iframe 
                src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=electronics&banner=1RJ5QAT5B55ECPXSXB82&f=ifr&linkID=cda624a45706f0e8c4ffa38ec807f84a&t=trendscadstor-20&tracking_id=trendscadstor-20" 
                width="300" height="250" scrolling="no" style={{border: 'none'}} frameBorder="0" 
                sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>
                <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=kitchen&banner=0QWEN0JRDQEW51SWDM82&f=ifr&linkID=971c1edbbddb2300790b08d3204508a1&t=trendscadstor-20&tracking_id=trendscadstor-20" 
                width="300" height="250" scrolling="no" style={{border: 'none'}} frameBorder="0" 
                sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>
                <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=kitchen&banner=03JSEEV8F677G77APHG2&f=ifr&linkID=39ca1284f6271790728f2c71db1e4289&t=trendscadstor-20&tracking_id=trendscadstor-20" 
                width="300" height="250" scrolling="no" style={{border: 'none'}} frameBorder="0" 
                sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>
                <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=22&l=ur1&category=kitchen&banner=0YPWCZ4K9ZG2ASK6D082&f=ifr&linkID=852a9ab817709e27bc8f45bd4df6e9ab&t=trendscadstor-20&tracking_id=trendscadstor-20" 
                width="250" height="250" scrolling="no" style={{border: 'none'}} frameBorder="0" 
                sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>
            </Masonry>
              <Masonry breakpointCols={commonBreakPoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column" >
                {
                  [...(related?.articles || []), ...(related?.videos || []), ...(related?.search || [])].map((item: any, index: number) => (
                    <div key={index} className='mb-4'>
                      <RandomData content={item} width={'min-w-full bg-white'} />
                    </div>
                  ))
                }
              </Masonry>
          </div>
        </div>
      } right={
        <div className='flex flex-col justify-start items-center'>
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ur1&category=kitchen&banner=055FT4XEETZCT6JN45R2&f=ifr&linkID=1f5c1d7b4c1c279d9549e3bccb13e892&t=trendscadstor-20&tracking_id=trendscadstor-20" 
          width="160" height="600" scrolling="no" style={{border: 'none'}} frameBorder="0" 
          sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>
          <div className='my-2'></div>
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ur1&category=kitchen&banner=0A9SGKGNVKPDY7YT7102&f=ifr&linkID=4080edefaed3103a3c5570d89fb96a8b&t=trendscadstor-20&tracking_id=trendscadstor-20" 
          width="160" height="600" scrolling="no" style={{border: 'none'}} frameBorder="0" 
          sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>
        </div>
      } />
    </PageContextProvider>
    </>
  )
}

export default Story


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id, type, category } = context.query

  if(!categories.includes(String(category)) || !types.includes(String(type)) || isNaN(Number(id))) {
    return {
      props: {
        data: {}
      },
      redirect: {
        destination: '/',
      }
    }
  }
  
  try {
    const basePath = 'https://api.trendscads.com'
    const home = await axios.get(`${basePath}/story?id=${id}&type=${type}`)
    const { data } = home

    return {
      props: {
        data: data.result || {},
        related: data.related,
        type,
        category
      }
    }
  } catch(error) {
   const status = (error as any)?.response.status

   if(status === 404) {
    return {
      props: {
        data: {}
      },
      notFound: true
    }
   }
    return {
      props: {
        data: {},
        related: []
      }
    }
  }
}