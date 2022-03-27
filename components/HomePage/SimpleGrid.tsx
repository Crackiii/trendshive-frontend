/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { gridItems } from './data'
import SimpleGridItem from './SimpleGridItem'

interface Props {
  simpleGridStories: any[]
}

function SimpleGrid(props: Props) {

  return (
    <div>
      <div className='grid-rows-1 grid-cols-1 gap-3 grid-flow-row sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7718309551494678"
          crossOrigin="anonymous"></script>
      <ins className="adsbygoogle"
          style={{display: "block"}}
          data-ad-format="fluid"
          data-ad-layout-key="-h0-w+2n-cw+jl"
          data-ad-client="ca-pub-7718309551494678"
          data-ad-slot="8278996414"></ins>
      <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
        {
          props.simpleGridStories.map((item, index) => (
            <SimpleGridItem key={index} item={item} />
          ))
        }

      </div>
      <div className='flex justify-center mt-5'>
        <button className="inline-block max-w-fit border border-slate-700 hover:bg-slate-700 hover:text-white hover:shadow-lg transition-all font-normal py-1 px-6">
          See more +
        </button>
      </div>
    </div>
  )
}

export default SimpleGrid