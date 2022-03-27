import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import HomePage, { validURL } from '../components/HomePage/HomePage'


const Home = (props: any) => {
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
      <link rel="icon" type="image/x-icon" href="/logo.ico" />
    </Head>
    <HomePage stories={props.res} />
  </>
  )
   
}

export default Home


export const getServerSideProps: GetServerSideProps = async (ctx) => {

  // const geo = await fetch("https://api.geoapify.com/v1/ipinfo?apiKey=589ae61973f3443faf4b13b2f1c57ae9")
  // .then(r => r.json())


  const {params, query} = ctx;
  const id = params?.id
  const res = await fetch(`https://trendscads-backend.herokuapp.com/stories`, {method: 'GET'}).then(res => res.json())

  return {
    props: {
      res: res.results,
      geo: 'DE'
    }
  }

}