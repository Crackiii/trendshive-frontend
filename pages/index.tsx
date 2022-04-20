import axios from 'axios';
import Head from 'next/head'
import CookiePopup from '../components/CookiePopup';
import Category from '../components/NewDesignHome/body/category/Category';
import Grid from '../components/NewDesignHome/body/grids/Grid';
import Page from '../components/NewDesignHome/Page';
import { PageContextProvider } from '../components/NewDesignHome/PageContext';
import { menuItems } from '../components/NewDesignHome/SideBar';


const Home = ({contents}: {contents: any}) => {

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
    
    <PageContextProvider>
      <Page left={
        <div className='overflow-hidden'>
          <Grid articles={contents?.articles?.[""]?.splice(0, 8)} />
          {
            menuItems.map((item, index) => (
              <Category 
                key={index} label={item.label} name={item.value} icon={item.icon_30 || ''} 
                videos={[...(contents?.videos?.[item.value] || []).slice(0, 8)]} 
                articles={[...(contents?.articles?.[item.value] || []).slice(0, 8)]} 
                search={[...(contents?.links?.[item.value] || []).slice(0, 8)]} />
            ))
          }
        </div>
      } right={<></>} />
    </PageContextProvider>
  </>
  )
   
}

export default Home


export const getServerSideProps = async () => {

  const geo = await (await axios.get("https://api.geoapify.com/v1/ipinfo?apiKey=589ae61973f3443faf4b13b2f1c57ae9")).data

  try {
    const basePath = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://trendscads.com'
    const home = await axios.get(`${basePath}/api/home?country=${geo.country.iso_code}`)
    const { data } = home

    return {
      props: {
        contents: data.results || []
      }
    }
  } catch(error) {
    return {
      props: {
        contents: []
      }
    }
  }

}
