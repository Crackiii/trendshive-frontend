import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'on'} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="/logo.ico" />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7718309551494678" crossOrigin="anonymous"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
  }