import React from 'react'
import RandomGridItem from './RandomGridItem'

interface Props {
  randomItemsGrid: any[]
}

function RandomItemsGrid(props: Props) {

  return (
    <>
    <div className="md:masonry-2-col lg:masonry-3-col xl:masonry-4-col box-border mx-auto before:box-inherit after:box-inherit">
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
      { props.randomItemsGrid.map((item, index) => (
        <RandomGridItem item={item} key={index} />
      ))}
    </div>
    <div className='flex justify-center mt-5'>
        <button className="inline-block max-w-fit border border-slate-700 hover:bg-slate-700 hover:text-white hover:shadow-lg transition-all font-normal py-1 px-6">
          See more +
        </button>
      </div>
    </>
  )
}

export default RandomItemsGrid