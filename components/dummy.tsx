import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import HomePage, { validURL } from '../components/HomePage/HomePage'
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import Script from 'next/script';
import CookiePopup from '../components/CookiePopup';
import axios from 'axios';



const Home = ({stories, cookies}: any) => {

  const createCookie = (name: string, value: string, minutes: number) =>  {
    if (minutes) {
        var date = new Date();
        date.setTime(date.getTime()+(minutes*60*1000));
        var expires = "; expires="+date.toUTCString();
    } else {
        var expires = "";
    }
    document.cookie = `${name}=${value}; expires=${expires}; path=/; Secure`;
  }

  useEffect(() => {
    createCookie('uniqid', cookies.uniqid, 60 * 24)
    createCookie('seen', cookies.seen, 60 * 24)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
    
    <blockquote className="twitter-tweet">
      <a href="https://twitter.com/mz_storymakers/status/1512132120667467791?ref_src=twsrc%5Etfw" />
    </blockquote> 
    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    
    

    <HomePage stories={stories} />
  </>
  )
   
}

export default Home


export const getServerSideProps: GetServerSideProps = async (ctx) => {


  // const geo = await fetch("https://api.geoapify.com/v1/ipinfo?apiKey=589ae61973f3443faf4b13b2f1c57ae9")
  // .then(r => r.json())
  const uniqid = ctx.req.cookies['uniqid'] || uuidv4()
  const seen = ctx.req.cookies['seen'] || 0

  const limit = 42;
  const offset = uniqid && Number(seen) && (Number(seen) * 42);

  const res = await fetch(`https://trendscads-backend.herokuapp.com/stories?offset=${offset}&limit=${limit}`, {method: 'GET'}).then(res => res.json())

  return {
    props: {
      stories: res.results,
      geo: 'DE',
      cookies: {
        uniqid,
        seen: Number(seen) + 1,
      },
    }
  }

}