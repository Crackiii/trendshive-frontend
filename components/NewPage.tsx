import axios from 'axios'
import { GetServerSideProps } from 'next'
import React, { useEffect, useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import RandomItemsGrid from './New/RandomItemsGrid'
import SimpleGrid from './New/SimpleGrid'
import SliceShow from './New/SliceShow'
import SmallGrid from './New/SmallGrid'
import YoutubeGrid from './New/YoutubeGrid'
import HomeFooter from './shared/HomeFooter'
import TopBar from './shared/TopBar'
import TrendingHeading from './shared/TrendingHeading'

const useYoutubeVideos = () => {
  const {isLoading, data: videos} = useQuery(['YOUTUBE'], () => {
    return axios.get('https://trendscads-backend.herokuapp.com/home/youtube').then(res => res.data)
  }, {
    cacheTime: 1000 * 60 * 60 * 2,
    refetchInterval: 1000 * 60 * 60 * 2,
    staleTime: 1000 * 60 * 60 * 2,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchIntervalInBackground: true,
  })

  return {isLoading, videos}
}

function NewPage({ realtime, daily }: { realtime: any, daily: any, youtube: any }) {

  const [realtimeStories] = useState(realtime)
  const [dailyStories] = useState(daily)

  const {isLoading, videos} =  useYoutubeVideos()

  const realtimeArticles = realtime.filter((r: any) => r)
  .map((r: any) => r.articles)
  .flatMap((r: any) => r)


  return (
    <div>
      <TopBar />
        <YoutubeGrid stories={realtimeArticles.splice(0, 40)} />
        <TrendingHeading title='Trending now' />
        <SimpleGrid stories={realtimeArticles.splice(0, 40)} />
        <TrendingHeading title='Recent stories' />
        <SmallGrid stories={realtimeArticles.splice(0, 40)} />
        <TrendingHeading title='Keep reading' />
        <RandomItemsGrid stories={realtimeArticles.splice(0, 40)} />
      <HomeFooter />
    </div>
  )
}

export default NewPage


export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const [realtime, daily] = await Promise.all([
    axios('https://trendscads-backend.herokuapp.com/home/google/realtime').then(res => res.data),
    axios('https://trendscads-backend.herokuapp.com/home/google/daily').then(res => res.data)
  ]).catch(() => [])

  return {
    props: {
      realtime,
      daily
    }
  }
}