/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import { GetServerSideProps } from 'next'
import React from 'react'
import Page from '../../components/NewDesignHome/Page'
import { PageContextProvider } from '../../components/NewDesignHome/PageContext'
import Tabs from '../../components/NewDesignHome/Tabs/Tabs'
import Article from '../../components/NewDesignHome/tiles/Article';
import Link from '../../components/NewDesignHome/tiles/Link';
import RandomData from '../../components/NewDesignHome/tiles/RandomData'
import Youtube from '../../components/NewDesignHome/tiles/Youtube';


function Category({params, data}: {params: any, data: any}) {
  const [currentTab, setCurrentTab] = React.useState('all')
  const [articles, videos, news] = data
console.log({articles, videos, news})
  const handleTabChange = (name: string) => {
    setCurrentTab(name)
  }

  const handleValueChange = (value: string) => ''

  return (
    <PageContextProvider>
      <Page 
        left={
          <div className=''>
            <div className='w-full bg-white h-96 rounded-xl overflow-hidden relative'>
              <img src={`/images/${params.category}.jpeg`} className='object-cover min-h-full min-w-full' alt={params.category} />
              <div className={'absolute w-full h-full left-0 top-0 z-10 gradient-bg'}>
                <div className='uppercase text-white font-black text-3xl mt-10 ml-10'>{params.category}</div>
              </div>
            </div>
            <div className='mt-5'>
              <Tabs onTabChange={handleTabChange} onSearchChange={handleValueChange} activeTab={currentTab} />
              {
                currentTab === 'all' && 
                <div className='w-full mt-10'>
                    <div className='sm:masonry-1-col md:masonry-2-col lg:masonry-3-col xl:masonry-5-col box-border mx-auto before:box-inherit after:box-inherit'>
                      {
                        [...articles, ...videos, ...news].slice(0, 100).map((item: any, index: number) => (
                          <div key={index} className='mb-4'>
                            <RandomData content={item} width={'min-w-full bg-white'} />
                          </div>
                        ))
                      }
                    </div>
                </div>
              }
              { currentTab === 'stories' &&
                <div className='mt-10 sm:masonry-1-col md:masonry-2-col lg:masonry-3-col xl:masonry-4-col box-border mx-auto before:box-inherit after:box-inherit'>
                  {
                     articles?.map((item: any, index: number) => (
                      <div key={index} className='mb-4'>
                        <Article article={item} width={'min-w-full border-none'} />
                      </div>
                    ))
                  }
                </div>
              }
              { currentTab === 'videos' &&
                <div className='mt-10 sm:masonry-1-col md:masonry-2-col lg:masonry-3-col xl:masonry-6-col box-border mx-auto before:box-inherit after:box-inherit'>
                  {
                    videos.map((item: any, index: number) => (
                      <div key={index} className='mb-4 inline-block'>
                        <Youtube video={item} />
                      </div>
                    ))
                  }
                </div>
              }
              { currentTab === 'news' &&  
                <div className='mt-10'>
                  {
                    news.map((item: any, index: number) => (
                      <div key={index} className='mb-4'>
                        <Link search={item} width={'min-w-full border-none'} />
                      </div>
                    ))
                  }
                </div>
              }
            </div>
          </div>
        } 
        right={
          <></>
        } 
      />
    </PageContextProvider>
  )
}

export default Category


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const params = ctx.query
  const geo = await (await axios.get("https://api.geoapify.com/v1/ipinfo?apiKey=589ae61973f3443faf4b13b2f1c57ae9")).data
  const home = await axios.get(`https://www.trendscads.com/api/categories/${params.category}?country=${geo.country.iso_code}`)
  const { data } = home

  return {
    props: {
      data,
      params
    }
  }

}