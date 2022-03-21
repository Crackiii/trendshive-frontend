/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import Tags from '../shared/Tags'
import { gridItems } from './data'

function RandomItemsGrid() {
  


  return (
    <>
    <div className="md:masonry-2-col lg:masonry-3-col xl:masonry-4-col box-border mx-auto before:box-inherit after:box-inherit">
      { gridItems.map((item, index) => (
        <div className="break-inside bg-white flex flex-col justify-star px-8 py-8 group cursor-pointer" style={{marginBottom: '1rem'}} key={index}>
          <Link href={'/story/latest-updates'}><a>
          <div className='flex justify-between'>
            <div className=' w-28 h-28 overflow-hidden rounded-lg shadow-2xl'>
              <img src={item.image} alt='img' className=' object-cover min-h-full min-w-full' />
            </div>
            <div className='flex flex-col justify-start'>
              <div className='flex justify-end'>
                <span className='text-xs bg-slate-700 hover:bg-slate-800 text-white inline-block min-w-fit py-1 px-2 text-center rounded-md'>{item.category}</span>
              </div>
              <div className='text-xs text-slate-300 text-right mt-5'>3 minutes ago</div>
              <div className='text-sm text-blue-400 text-right mt-3'>{item.source}</div>
            </div>
          </div>
          <div className='text-xl font-bold group-hover:text-blue-400 group-hover:underline mt-5'>{item.title}</div>
          <div className='text-base font-light text-slate-500 mt-5'>{item.desc}</div>
          <div className='mt-5'>
            <Tags tags={['vladimir', 'russian', 'russia-ukrain', 'war']} />
          </div>
          </a></Link>
        </div>
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