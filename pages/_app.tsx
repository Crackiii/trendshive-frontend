import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import Script from 'next/script'
import Head from 'next/head'

const client = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
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
      <meta name="twitter:image" content="/logo.jpegE" />
      <meta name="twitter:site" content="@Trendscads" />
      <meta name="twitter:creator" content="@Trendscads" />

    </Head>
    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7718309551494678"
    crossOrigin="anonymous"></Script>
    <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-90YBCKT146"
        strategy="afterInteractive"
      />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-90YBCKT146');
      `}
    </Script>
    <QueryClientProvider client={client}>
      <Component {...pageProps} />
    </QueryClientProvider>
    </>
  )
  
}

export default MyApp
