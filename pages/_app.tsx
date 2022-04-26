import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import Script from 'next/script'
import Head from 'next/head'
import "nprogress/nprogress.css";
import dynamic from 'next/dynamic'

const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar");
  },
  { ssr: false },
);

const client = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <link rel="icon" type="image/x-icon" href="/logo.ico" />
    </Head>
    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7718309551494678" crossOrigin="anonymous"></Script>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-90YBCKT146" strategy="afterInteractive" />
    <Script src="https://contextual.media.net/dmedianet.js?cid=8CUB8V2KU" async={true}></Script>
    <Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="c0c45e6c-e75e-499a-b086-0913896343f3" data-blockingmode="auto" type="text/javascript"></Script>
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-90YBCKT146');
      `}
    </Script>
    <Script id='medianet' type="text/javascript">
      {`
        window._mNHandle = window._mNHandle || {};
        window._mNHandle.queue = window._mNHandle.queue || [];
        medianet_versionId = "3121199";
      `}
    </Script>
    <QueryClientProvider client={client}>
      <TopProgressBar />
      <Component {...pageProps} />
    </QueryClientProvider>
    </>
  )
  
}

export default MyApp
