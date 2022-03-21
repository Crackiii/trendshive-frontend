import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import { QueryClient, QueryClientProvider } from 'react-query'
import HomePage from '../components/HomePage/HomePage'

const client = new QueryClient()

const Home: NextPage = () => {

  return (
    <>
    <Head>
      <title>Trendscade - Trending stories</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7718309551494678"
     crossOrigin="anonymous"></Script>
    <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-BBD7DXCH6C"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-BBD7DXCH6C');
        `}
      </Script>
      <div className='min-h-screen'>
      <QueryClientProvider client={client}>
        <HomePage />
      </QueryClientProvider>
    </div>
    </>

  )
}

export default Home
