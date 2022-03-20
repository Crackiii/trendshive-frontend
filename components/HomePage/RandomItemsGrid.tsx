/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Tags from '../shared/Tags'
import { gridItems } from './data'
import SmallGridItem from './SmallGridItem'

function RandomItemsGrid() {
  
  

  const elements: JSX.Element[] = [
    <div className="bg-white flex flex-col justify-between row-span-3 px-8 py-8 group cursor-pointer" key={1}>
        <div className='text-2xl font-bold group-hover:text-blue-400 group-hover:underline'>{gridItems[0].title}</div>
        <div className='text-base font-light text-slate-500 mt-5'>{gridItems[0].desc}</div>
        <div className='mt-5'>
          <Tags tags={['vladimir', 'russian', 'russia-ukrain', 'war']} />
        </div>
        <div className='flex justify-between'>
          <div className='text-sm text-slate-300 text-right mt-5'>11 Hours ago</div>
          <div className='text-sm text-blue-400 text-right mt-5'>{gridItems[0].source}</div>
        </div>
      </div>,
      <div className="bg-white flex flex-col justify-between row-start-4 row-span-1 col-start-1 col-span-1 px-8 py-8 group cursor-pointer " key={2}>
        <div className='text-lg font-bold group-hover:text-blue-400 group-hover:underline'>{gridItems[1].title}</div>
        <div className='text-sm font-light text-slate-500'>{gridItems[1].desc}</div>
        <div className='flex justify-between mt-2'>
          <div className='text-xs text-slate-300 text-right'>3 minutes ago</div>
          <div className='text-xs text-blue-400 text-right'>{gridItems[1].source}</div>
        </div>
      </div>,
      <div className="bg-white flex flex-col justify-between row-start-1 row-span-4 col-start-2 col-span-1 px-8 py-8 group cursor-pointer" key={3}>
        <div className='w-full h-60 relative'>
          <img src={gridItems[2].image} alt='image' className='object-cover w-full min-w-full h-full min-h-full' />
        </div>
        <div className='text-2xl font-bold group-hover:text-blue-400 group-hover:underline'>{gridItems[2].title}</div>
        <div className='text-base font-light text-slate-500'>{gridItems[2].desc}</div>
        <div>
          <Tags tags={['vladimir', 'russian', 'russia-ukrain', 'war']} />
        </div>
        <div className='flex justify-between mt-5'>
          <div className='text-sm text-slate-300 text-right'>5 days ago</div>
          <div className='text-sm text-blue-400 text-right'>{gridItems[2].source}</div>
        </div>
      </div>,
      <div className="bg-white hidden lg:flex flex-col justify-between row-start-1 row-span-2 col-start-3 col-span-1 px-8 py-8 group cursor-pointer" key={4}>
        <div className='w-full h-40 relative'>
          <img src={gridItems[3].image} alt='image' className='object-cover w-full min-w-full h-full min-h-full' />
        </div>
        <div className='text-xl font-bold group-hover:text-blue-400 group-hover:underline'>{gridItems[3].title}</div>
        <div className='flex justify-between'>
          <div className='text-sm text-slate-300 text-right'>5 days ago</div>
          <div className='text-sm text-blue-400 text-right'>{gridItems[3].source}</div>
        </div>
        {
          gridItems[3].title.length < 20 && 
          <div>
            <Tags tags={['vladimir', 'russian', 'russia-ukrain', 'war']} />
          </div>
        }
      </div>,
      <div className="bg-white hidden lg:flex flex-col justify-between row-start-3 row-span-2 col-start-3 col-span-1 px-8 py-8 group cursor-pointer" key={5}>
        <div className='w-full h-40 relative'>
          <img src={gridItems[4].image} alt='image' className='object-cover w-full min-w-full h-full min-h-full' />
        </div>
        <div className='text-xl font-bold group-hover:text-blue-400 group-hover:underline'>{gridItems[4].title}</div>
        {
          gridItems[4].title.length < 20 && 
          <div>
            <Tags tags={['vladimir', 'russian', 'russia-ukrain', 'war']} />
          </div>
        }
        <div className='flex justify-between'>
          <div className='text-sm text-slate-300 text-right'>5 days ago</div>
          <div className='text-sm text-blue-400 text-right'>{gridItems[4].source}</div>
        </div>
      </div>,
      <div className="bg-white hidden xl:flex flex-col justify-between row-start-1 row-span-2 col-start-4 col-span-1 px-8 py-8 group cursor-pointer" key={6}>
        <div className='text-xl font-bold group-hover:text-blue-400 group-hover:underline'>{gridItems[5].title}</div>
        <div className='text-base font-light text-slate-500 mt-5'>{gridItems[5].desc}</div>
        <div>
          <Tags tags={['vladimir', 'russian', 'russia-ukrain', 'war']} />
        </div>
        <div className='flex justify-between'>
          <div className='text-sm text-slate-300 text-right'>5 days ago</div>
          <div className='text-sm text-blue-400 text-right'>{gridItems[5].source}</div>
        </div>
      </div>,
      <div className="bg-white hidden xl:flex flex-col justify-between row-start-3 row-span-1 col-start-4 col-span-1 px-8 py-8 group cursor-pointer" key={7}>
        <div className='text-lg font-bold group-hover:text-blue-400 group-hover:underline'>{gridItems[6].title}</div>
        <div className='text-sm font-light text-slate-500'>{gridItems[6].desc}</div>
        <div className='flex justify-between mt-2'>
          <div className='text-xs text-slate-300 text-right'>3 minutes ago</div>
          <div className='text-xs text-blue-400 text-right'>{gridItems[6].source}</div>
        </div>
      </div>,
      <div className="bg-white hidden xl:flex flex-col justify-between row-start-4 row-span-1 col-start-4 col-span-1 px-8 py-8 group cursor-pointer" key={8}>
        <div className='text-lg font-bold group-hover:text-blue-400 group-hover:underline'>{gridItems[7].title}</div>
        <div className='text-sm font-light text-slate-500'>{gridItems[7].desc}</div>
        <div className='flex justify-between mt-2'>
          <div className='text-xs text-slate-300 text-right'>3 minutes ago</div>
          <div className='text-xs text-blue-400 text-right'>{gridItems[7].source}</div>
        </div>
      </div>
  ]

  return (
    <>
    <div className="hidden md:grid overflow-hidden grid-cols-1 grid-rows-1 gap-px grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{height: '40rem'}}>
      {
        elements.map(el => (el))
      }
    </div>
    
    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:hidden'>
      {
        gridItems.map((item, index) => (
          <SmallGridItem key={index} item={item} />
        ))
      }
    </div>
    </>
  )
}

export default RandomItemsGrid