import React from 'react'
import { useRouter } from 'next/router'
import TopBar from '../../components/shared/TopBar'
import HomeFooter from '../../components/shared/HomeFooter'
import { GetServerSideProps } from 'next'
import RandomGridItem from '../../components/HomePage/RandomGridItem'

function Search({results}: any) {

  const params = useRouter()


  return (
    <>
      <TopBar />
        <div className='my-10 mx-10 uppercase'>Showing results for: <b className='font-bolder ml-3 text-xl'>{params?.query['searchQuery']}</b></div>
        <div className="md:masonry-2-col lg:masonry-3-col xl:masonry-4-col box-border mx-auto before:box-inherit after:box-inherit">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7718309551494678"
            crossOrigin="anonymous"></script>
        <ins className="adsbygoogle"
            style={{display:"block"}}
            data-ad-format="autorelaxed"
            data-ad-client="ca-pub-7718309551494678"
            data-ad-slot="7480032012"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
        {results.results.map((item: any, index: number) => (
          <RandomGridItem item={item} key={index} />
        ))}
      </div>
      <div className='flex justify-center mt-5'>
        {
          results.results.length ===  20 &&
          <button className="inline-block max-w-fit border border-slate-700 hover:bg-slate-700 hover:text-white hover:shadow-lg transition-all font-normal py-1 px-6">
            See more +
          </button>
        }
        {
          results.results.length ===  0 && <>No results</>
        }
      </div>
      <HomeFooter />
    </>
    
  )
}

export default Search



export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { query} = ctx;

  const res = await fetch(`https://trendscads-backend.herokuapp.com/search?searchQuery=${query.searchQuery}&limit=${query.limit}&offset=${query.offset}`, {method: 'GET'}).then(res => res.json())
  
  return {
    props: {
      results: res
    }
  }

}