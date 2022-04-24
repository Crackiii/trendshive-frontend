import axios from 'axios';
import Head from 'next/head'
import Script from 'next/script';
import CookiePopup from '../components/CookiePopup';
import Category from '../components/NewDesignHome/body/category/Category';
import Grid from '../components/NewDesignHome/body/grids/Grid';
import Page from '../components/NewDesignHome/Page';
import { PageContextProvider } from '../components/NewDesignHome/PageContext';
import { menuItems } from '../components/NewDesignHome/SideBar';
import Tags from '../components/shared/Tags';


const Home = ({contents}: {contents: any}) => {

  return (
    <>
      <Head>
        <title>Trendscads - Trends at your finger tip</title>
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
        <meta name="robots" content="index, follow" />
        
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

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <CookiePopup />

      
      <PageContextProvider>
        <Page left={
          <div className='overflow-hidden'>
            <Grid articles={contents?.daily_articles || []} />
            <div id="857289888">
              <Script id='medianet-ad-unit1' type="text/javascript">
                {`
                  try {
                      window._mNHandle.queue.push(function (){
                          window._mNDetails.loadTag("857289888", "970x250", "857289888");
                      });
                  }
                  catch (error) {}
                `}
              </Script>
            </div>
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
        } right={
          <div>
            <h4 className='mb-4'>Related Searches</h4>
            <Tags tags={[...contents?.queries || []]} />
          </div>
        } />
      </PageContextProvider>
    </>
  )
   
}

export default Home


export const getServerSideProps = async () => {

  

  try {
    const basePath = 'https://api.trendscads.com'
    const home = await axios.get(`${basePath}/home`)
    const { data } = home

    return {
      props: {
        contents: data.results || []
      }
    }
  } catch(error) {
    console.log({error})
    return {
      props: {
        contents: []
      }
    }
  }

}
