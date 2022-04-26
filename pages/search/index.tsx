import axios from 'axios'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React from 'react'
import Page from '../../components/NewDesignHome/Page'
import { PageContextProvider } from '../../components/NewDesignHome/PageContext'
import Tabs from '../../components/NewDesignHome/Tabs/Tabs'
import Masonry from 'react-masonry-css'
import { commonBreakPoints } from '../../components/NewDesignHome/body/category/Category';
import RandomData from '../../components/NewDesignHome/tiles/RandomData'
import Article from '../../components/NewDesignHome/tiles/Article'
import Youtube from '../../components/NewDesignHome/tiles/Youtube'
import Link from '../../components/NewDesignHome/tiles/Link'
import Script from 'next/script'


function Search({data, q}: {related: any, data: any, type: string, category: string, q: string}) {
  const [currentTab, setCurrentTab] = React.useState('all')
  const handleTabChange = (name: string) => {
    setCurrentTab(name)
  }

  const handleValueChange = (value: string) => ''

  return (
    <>
    <Head>
        <title>Search: {q} - Trendscads</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name='keywords' content='
          Trends, Search engine, search trends, top trends, 
          trends hive, trending topics, daily trends, realtime trends, 
          worldwide trends, news trends, trending stories, business trends, 
          sports trends, entertainment trends, health trends, science and technology trends, 
          law trends, fintech trends, ecommerce, ecommerce trends, products trends,
          amazon trends, ali express trends, ebay trends, trending products, gaming trends, twitch trends, 
          aliexpress trending products, amazon trending products, amazon todays deals, amazon movers and shakers,
          amazon most wished in products, most wished in products, amazon new releases, youtube trends, food trends,
          trending travels, youtube travels, top trending food videos, youtube top trending food videos, trending searches' />
        <meta name='description' content='Trends at your finger tip, world # 1 trends search engine, million of trending stories, trending products, ecommerce news, science and technology topics, world news and many more.' />
        
        <meta property="og:type" content="story" />
        <meta property="og:title" content="Trends at your finger tips" />
        <meta property="og:description" content="Trends at your finger tip, world # 1 trends search engine, million of trending stories, trending products, ecommerce news, science and technology topics, world news and many more." />
        <meta property="og:image" content="/logo.jpeg" />
        <meta property="og:url" content="https://trendscads.com/" />
        <meta property="og:site_name" content="Trendscads" />

        <meta name="twitter:title" content="Trends at your finger tips" />
        <meta name="twitter:description" content="Trends at your finger tip, world # 1 trends search engine, million of trending stories, trending products, ecommerce news, science and technology topics, world news and many more." />
        <meta name="twitter:image" content="/logo.jpeg" />
        <meta name="twitter:site" content="@Trendscads" />
        <meta name="twitter:creator" content="@Trendscads" />
        
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
    <PageContextProvider>
      <Page left={
        <div className='overflow-hidden'>
          <Script id="CookieDeclaration" src="https://consent.cookiebot.com/c0c45e6c-e75e-499a-b086-0913896343f3/cd.js" type="text/javascript" async></Script>
          <div className='mt-0'>
            <Tabs onTabChange={handleTabChange} onSearchChange={handleValueChange} activeTab={currentTab} />
            <div className='my-7 flex justify-center'>
              <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=health&banner=0G5GGJ1N5H018KBVX3R2&f=ifr&linkID=101686b940a3f69fdb28d8aa694f76f9&t=trendscadstor-20&tracking_id=trendscadstor-20" 
              width="728" height="90" scrolling="no" style={{border: 'none'}} frameBorder="0" 
              sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>
            </div>
            {
              currentTab === 'all' && 
              <div className='w-full mt-10'>
                  <Masonry breakpointCols={commonBreakPoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column" >
                    {
                      [...data.articles, ...data.search, ...data.videos].map((item: any, index: number) => (
                        <div key={index} className='mb-4'>
                          <RandomData content={item} width={'min-w-full bg-white'} />
                        </div>
                      ))
                    }
                  </Masonry>
              </div>
            }
            { currentTab === 'stories' &&
              <div className='mt-10 sm:masonry-1-col md:masonry-2-col lg:masonry-3-col xl:masonry-4-col box-border mx-auto before:box-inherit after:box-inherit'>
                {
                  data.articles.length ?
                  data.articles.map((item: any, index: number) => (
                    <div key={index} className='mb-4'>
                      <Article article={item} width={'min-w-full border-none'} />
                    </div>
                  )): <>No Stories</>
                }
              </div>
            }
            { currentTab === 'videos' &&
              
              <div className='mt-10 sm:masonry-1-col md:masonry-3-col lg:masonry-4-col 2xl:masonry-5-col box-border before:box-inherit after:box-inherit'>
                {
                   data.videos.length ?
                   data.videos.map((item: any, index: number) => (
                      <div key={index} className='mb-4'>
                        <Youtube video={item} width={'min-w-full'} />
                      </div>
                    )): <>No videos</>
                }
              </div> 
            }
            { currentTab === 'news' &&  
              <div className='mt-10'>
                {
                   data.search.length ?
                   data.search.map((item: any, index: number) => (
                    <div key={index} className='mb-4'>
                      <Link search={item} width={'min-w-full border-none'} />
                    </div>
                  )): <>No News</>
                }
              </div>
            }
          </div>
        </div>
      } right={
        <div className='flex flex-col justify-start items-center'>
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ur1&category=amazonfashion&banner=0AG50GY6P3KKHK2XTM02&f=ifr&linkID=2c3f7496a5314310d0f4b7335d325536&t=trendscadstor-20&tracking_id=trendscadstor-20" 
          width="160" height="600" scrolling="no" style={{border: 'none'}} frameBorder="0" 
          sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>
          <div className='my-2'></div>
          <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ur1&category=outlet&banner=0KVZNKG64C5R895PMPR2&f=ifr&linkID=c06f70fb016b4d845dcb4253d1f8819c&t=trendscadstor-20&tracking_id=trendscadstor-20" 
          width="160" height="600" scrolling="no" style={{border: 'none'}} frameBorder="0" 
          sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>
        </div>
      } />
    </PageContextProvider>
    </>
  )
}

export default Search


export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query?.q

  try {
    const basePath = 'https://api.trendscads.com'
    const search = await axios.get(`${basePath}/search?q=${query || ''}`)
    const { data } = search

    return {
      props: {
        data: data.results || {},
        q: query || '',
      }
    }
  } catch(error) {
    console.log({error})
   const status = (error as any)?.response?.status

   if(status === 404) {
    return {
      props: {
        data: [],
        q: query || '',
      },
      notFound: true
    }
   }

  return {
    props: {
      data: [],
      q: query || '',
    }
  }
  }
}