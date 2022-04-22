/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import { GetServerSideProps } from 'next'
import Head from 'next/head';
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
  const handleTabChange = (name: string) => {
    setCurrentTab(name)
  }

  const handleValueChange = (value: string) => ''
  //make first char uppercase
  const category = params.category.charAt(0).toUpperCase() + params.category.slice(1)

  return (
    <>
      <Head>
        <title>{category} - Trendscads</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name='keywords' content='Trends, daily trends, realtime trends, worldwide, news, trending stories, news, business, sports, entertainment, health, sci/tech, law, fintech' />
        <meta name='description' content='Search and find top trending stories in any category (business, sports, entertainment, health, sci/tech, law, fintech) at your finger tip.' />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
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
                      <div className='sm:masonry-1-col md:masonry-3-col lg:masonry-4-col 2xl:masonry-5-col box-border mx-auto before:box-inherit after:box-inherit'>
                        {
                          [...(data?.flatMap((a: any) => a) || [])]
                            .slice(0, 100).map((item: any, index: number) => (
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
                      data?.[0]?.length ?
                      data?.[0]?.map((item: any, index: number) => (
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
                      data?.[1]?.length > 0 ?
                        data?.[1]?.map((item: any, index: number) => (
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
                      data?.[2]?.length > 0 ?
                      data?.[2]?.map((item: any, index: number) => (
                        <div key={index} className='mb-4'>
                          <Link search={item} width={'min-w-full border-none'} />
                        </div>
                      )): <>No News</>
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
    </>
  )
}

export default Category


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const params = ctx.query
  const geo = await (await axios.get("https://api.geoapify.com/v1/ipinfo?apiKey=589ae61973f3443faf4b13b2f1c57ae9")).data
  try {
    const basePath = 'https://api.trendscads.com'
    const home = await axios.get(`${basePath}/categories/${params.category}?country=${geo.country.iso_code}`)
    const { data } = home

    return {
      props: {
        data,
        params
      }
    }
  } catch(error) {
    return {
      props: {
        data: [],
        params
      }
    }
  }
}