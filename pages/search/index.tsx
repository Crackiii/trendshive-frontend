import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import TopBar from '../../components/shared/TopBar'
import HomeFooter from '../../components/shared/HomeFooter'
import { GetServerSideProps } from 'next'
import RandomGridItem from '../../components/HomePage/RandomGridItem'
import axios from 'axios'

function Search({results, videos, news}: any) {
  const params = useRouter()

  const mixedData = [...results.results, ...videos, ...news]

  //sort mixedData based on date and time
  mixedData.sort((a: any, b: any) => {
    const aDate = new Date(a.date || a.published || a.time)
    const bDate = new Date(a.date || a.published || a.time)
    
    return aDate.getTime() - bDate.getTime()
  })

  return (
    <>
      <TopBar />
        <div className='my-10 mx-10 uppercase'>Showing results for: <b className='font-bolder ml-3 text-xl'>{params?.query['searchQuery']}</b></div>
        <div className="md:masonry-2-col lg:masonry-3-col xl:masonry-4-col box-border mx-auto before:box-inherit after:box-inherit">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7718309551494678"
            crossOrigin="anonymous"></script>
        <ins className="adsbygoogle"
            style={{display:"block"}}
            data-ad-format="autorelaxed"
            data-ad-client="ca-pub-7718309551494678"
            data-ad-slot="7480032012"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
        {mixedData.map((item: any, index: number) => (
          <RandomGridItem item={item} key={index} />
        ))}
      </div>
      <div className='flex justify-center mt-5'>
        {
          mixedData.length ===  20 &&
          <button className="inline-block max-w-fit border border-slate-700 hover:bg-slate-700 hover:text-white hover:shadow-lg transition-all font-normal py-1 px-6">
            See more +
          </button>
        }
        {
          mixedData.length ===  0 && <>No results</>
        }
      </div>
      <HomeFooter />
    </>
    
  )
}

export default Search



export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { query } = ctx;

  const res = await fetch(`https://trendscads-backend.herokuapp.com/search?searchQuery=${query.searchQuery}&limit=${query.limit}&offset=${query.offset}`, {method: 'GET'}).then(res => res.json())
  const videos = await fetch(`https://trendscads-backend.herokuapp.com/search/videos?searchQuery=${query.searchQuery}`, {method: 'GET'}).then(res => res.json())
  const news = await fetch(`https://trendscads-backend.herokuapp.com/search/news?searchQuery=${query.searchQuery}`, {method: 'GET'}).then(res => res.json())


  return {
    props: {
      results: res,
      videos,
      news
    }
  }

}