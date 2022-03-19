import type { NextPage } from 'next'
import Script from 'next/script'
import HomePage from '../components/HomePage/HomePage'

const Home: NextPage = () => {

  return (
    <>
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
      <HomePage />
    </div>
    </>

  )
}

export default Home
