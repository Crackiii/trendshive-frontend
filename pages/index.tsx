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
