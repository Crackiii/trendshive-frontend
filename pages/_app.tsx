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
      <link rel="icon" type="image/x-icon" href="/logo.ico" />
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
