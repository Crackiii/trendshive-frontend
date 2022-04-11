import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import HomePage from '../components/HomePage/HomePage'
import { v4 as uuidv4 } from 'uuid';
import CookiePopup from '../components/CookiePopup';
import NewPage from '../components/NewPage';
import axios from 'axios';
import { useState } from 'react';
import TopBar from '../components/shared/TopBar';
import TrendingHeading from '../components/shared/TrendingHeading';
import HomeFooter from '../components/shared/HomeFooter';
import { useQuery } from 'react-query';
import YoutubeGrid from '../components/New/YoutubeGrid';
import SimpleGrid from '../components/New/SimpleGrid';
import SmallGrid from '../components/New/SmallGrid';
import RandomItemsGrid from '../components/New/RandomItemsGrid';

const useYoutubeVideos = () => {
  const {isLoading, data: videos} = useQuery(['YOUTUBE'], () => {
    //axios.get('https://trendscads-backend.herokuapp.com/home/youtube').then(res => res.data)
    return []
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

const Home = ({ realtime, daily }: { realtime: any, daily: any, youtube: any }) => {

  const [realtimeStories] = useState(realtime)
  const [dailyStories] = useState(daily)

  const {isLoading, videos} =  useYoutubeVideos()

  const realtimeArticles = realtime.filter((r: any) => r)
  .map((r: any) => r.articles)
  .flatMap((r: any) => r)

  console.log({realtime, daily})

  return (
  <>
    <Head>
      <title>Trendscads - Trends at your finger tips</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name='keywords' content='Trends, daily trends, realtime trends, worldwide, news, trending stories, news, business, sports, entertainment, health, sci/tech, law, fintech' />
      <meta name='description' content='Search and find top trending stories in any category (business, sports, entertainment, health, sci/tech, law, fintech) at your finger tip.' />
      <meta name="robots" content="index, follow" />
      
      <meta property="og:type" content="story" />
      <meta property="og:title" content="Trends at your finger tips" />
      <meta property="og:description" content="Search and find top trending stories in any category (business, sports, entertainment, health, sci/tech, law, fintech) at your finger tip." />
      <meta property="og:image" content="/logo.jpeg" />
      <meta property="og:url" content="https://trendscads.com/" />
      <meta property="og:site_name" content="Trendscads" />

      <meta name="twitter:title" content="Trends at your finger tips" />
      <meta name="twitter:description" content="Search and find top trending stories in any category (business, sports, entertainment, health, sci/tech, law, fintech) at your finger tip." />
      <meta name="twitter:image" content="/logo.jpeg" />
      <meta name="twitter:site" content="@Trendscads" />
      <meta name="twitter:creator" content="@Trendscads" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
    <CookiePopup />
    
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
  </>
  )
   
}

export default Home


export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const geo = await fetch("https://api.geoapify.com/v1/ipinfo?apiKey=589ae61973f3443faf4b13b2f1c57ae9")
  .then(r => r.json())

  const [realtime, daily] = await Promise.all([
    axios(`https://trendscads-backend.herokuapp.com/home/google/realtime?country=${geo.country.iso_code}`).then(res => res.data),
    axios(`https://trendscads-backend.herokuapp.com/home/google/daily?country=${geo.country.iso_code}`).then(res => res.data)
  ]).catch(() => [])

  return {
    props: {
      realtime,
      daily
    }
  }
}