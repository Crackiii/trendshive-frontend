import Head from 'next/head'
import Link from "next/link";
import Script from 'next/script';
import Page from "../../components/NewDesignHome/Page";
import { PageContextProvider } from "../../components/NewDesignHome/PageContext";

export default function Custom404() {
  return(
    <>
      <Head>
        <title>404 - Trendscads</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name='keywords' content='Trends, daily trends, realtime trends, worldwide, news, trending stories, news, business, sports, entertainment, health, sci/tech, law, fintech' />
        <meta name='description' content='Search and find top trending stories in any category (business, sports, entertainment, health, sci/tech, law, fintech) at your finger tip.' />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <Script id="CookieDeclaration" src="https://consent.cookiebot.com/c0c45e6c-e75e-499a-b086-0913896343f3/cd.js" type="text/javascript" async></Script>
      </Head>
      <PageContextProvider>
        <Page left={
          <div className="w-full flex flex-col justify-center items-center" style={{height: 'calc(100vh - 150px)'}}>
            <h1 className="block text-6xl font-extrabold">404</h1>
            <div className="text-slate-400 mt-3">Page Not Found</div>
            <Link href="/">
              <a className="my-10 cursor-pointer bg-slate-600 hover:bg-slate-800 px-4 py-1 rounded-md text-white">See more articles</a>
            </Link>
          </div>
        } right={
          <></>
        } />
      </PageContextProvider>
    </>
  )
}
