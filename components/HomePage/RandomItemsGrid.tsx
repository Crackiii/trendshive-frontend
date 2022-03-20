/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Tags from '../shared/Tags'

function RandomItemsGrid() {



  return (
    <div className="grid overflow-hidden grid-cols-4 grid-rows-4 gap-px grid-flow-row mb-80" style={{height: '40rem'}}>
      <div className="bg-white flex flex-col justify-between row-span-3 px-8 py-8 group cursor-pointer">
        <div className='text-2xl font-bold group-hover:text-blue-400 group-hover:underline'>Vladimir Putin shock: Russias war against Ukraine and the economy</div>
        <div className='text-base font-light text-slate-500 mt-5'>Current forecasts are surprisingly optimistic with regard to further economic development in Germany. Would be nice. But things can also turn out very differently. In the midst of the greatest military crisis Europe has seen since World War II, there seems to be one certainty: the German economy is booming.</div>
        <div className='mt-5'>
          <Tags tags={['vladimir', 'russian', 'russia-ukrain', 'war']} />
        </div>
        <div className='flex justify-between'>
          <div className='text-sm text-slate-300 text-right mt-5'>11 Hours ago</div>
          <div className='text-sm text-blue-400 text-right mt-5'>Google Inc.</div>
        </div>
      </div>
      <div className="bg-white flex flex-col justify-between row-start-4 row-span-1 col-start-1 col-span-1 px-8 py-8 group cursor-pointer">
        <div className='text-lg font-bold group-hover:text-blue-400 group-hover:underline'>Does Cupra build the better ID.3? - Cupra Born in the test</div>
        <div className='text-sm font-light text-slate-500'>Current forecasts are surprisingly optimistic with ...</div>
        <div className='flex justify-between mt-2'>
          <div className='text-xs text-slate-300 text-right'>3 minutes ago</div>
          <div className='text-xs text-blue-400 text-right'>Google Inc.</div>
        </div>
      </div>
      <div className="bg-white flex flex-col justify-between row-start-1 row-span-4 col-start-2 col-span-1 px-8 py-8 group cursor-pointer">
        <div className='w-full h-60 relative'>
          <img src={'https://www.trustedreviews.com/wp-content/uploads/sites/54/2019/11/google-news.png'} alt='image' className='object-cover w-full min-w-full h-full min-h-full' />
        </div>
        <div className='text-2xl font-bold group-hover:text-blue-400 group-hover:underline'>Vladimir Putin shock: Russias war against Ukraine and the economy</div>
        <div className='text-base font-light text-slate-500 mt-5'>Current forecasts are surprisingly optimistic with regard to further economic development in Germany. Would be nice. But things can also turn out very differently.</div>
        <div className='mt-5'>
          <Tags tags={['vladimir', 'russian', 'russia-ukrain', 'war']} />
        </div>
        <div className='flex justify-between mt-5'>
          <div className='text-sm text-slate-300 text-right'>5 days ago</div>
          <div className='text-sm text-blue-400 text-right'>Google Inc.</div>
        </div>
      </div>
      <div className="bg-white flex flex-col justify-between row-start-1 row-span-2 col-start-3 col-span-1 px-8 py-8 group cursor-pointer">
        <div className='w-full h-40 relative'>
          <img src={'https://a57.foxnews.com/cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/8e7cff3b-04de-4e13-ac8d-be9eac55c77f/61e04a3a-c757-4b88-9cfe-a04294dc8ab2/1280x720/match/931/524/image.jpg?ve=1&tl=1'} alt='image' className='object-cover w-full min-w-full h-full min-h-full' />
        </div>
        <div className='text-xl font-bold group-hover:text-blue-400 group-hover:underline'>Vladimir Putin shock: Russias war against Ukraine and the economy</div>
        <div className='flex justify-between'>
          <div className='text-sm text-slate-300 text-right'>5 days ago</div>
          <div className='text-sm text-blue-400 text-right'>Google Inc.</div>
        </div>
      </div>
      <div className="bg-white flex flex-col justify-between row-start-3 row-span-2 col-start-3 col-span-1 px-8 py-8 group cursor-pointer">
        <div className='w-full h-40 relative'>
          <img src={'https://a57.foxnews.com/cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/f53fc8c0-255b-426a-9f5b-7f3655eb5d4b/979d4580-b53a-4d24-a332-bcccae849308/1280x720/match/931/524/image.jpg?ve=1&tl=1'} alt='image' className='object-cover w-full min-w-full h-full min-h-full' />
        </div>
        <div className='text-xl font-bold group-hover:text-blue-400 group-hover:underline'>Qatar to help Germany cut reliance on Russian gas, says minister</div>
        <div className='flex justify-between'>
          <div className='text-sm text-slate-300 text-right'>5 days ago</div>
          <div className='text-sm text-blue-400 text-right'>Google Inc.</div>
        </div>
      </div>
      <div className="bg-white flex flex-col justify-between row-start-1 row-span-2 col-start-4 col-span-1 px-8 py-8 group cursor-pointer">
        <div className='text-xl font-bold group-hover:text-blue-400 group-hover:underline'>Qatar to help Germany cut reliance on Russian gas, says minister</div>
        <div className='text-base font-light text-slate-500 mt-5'>Current forecasts are surprisingly optimistic with regard to further economic development in Germany. Would be nice. But things can also turn out very differently.</div>
        <div>
          <Tags tags={['vladimir', 'russian', 'russia-ukrain', 'war']} />
        </div>
        <div className='flex justify-between'>
          <div className='text-sm text-slate-300 text-right'>5 days ago</div>
          <div className='text-sm text-blue-400 text-right'>Google Inc.</div>
        </div>
      </div>
      <div className="bg-white flex flex-col justify-between row-start-3 row-span-1 col-start-4 col-span-1 px-8 py-8 group cursor-pointer">
        <div className='text-lg font-bold group-hover:text-blue-400 group-hover:underline'>Russia-Ukraine Latest News: March 17, 2022</div>
        <div className='text-sm font-light text-slate-500'>Russian missiles again hit areas in the west of Ukraine ...</div>
        <div className='flex justify-between mt-2'>
          <div className='text-xs text-slate-300 text-right'>3 minutes ago</div>
          <div className='text-xs text-blue-400 text-right'>Google Inc.</div>
        </div>
      </div>
      <div className="bg-white flex flex-col justify-between row-start-4 row-span-1 col-start-4 col-span-1 px-8 py-8 group cursor-pointer">
        <div className='text-lg font-bold group-hover:text-blue-400 group-hover:underline'>Scum and traitors: Under pressure over Ukraine, Putin turns his ire on Russians</div>
        <div className='text-sm font-light text-slate-500'>Russian President Vladimir Putin criticized Russian...</div>
        <div className='flex justify-between mt-2'>
          <div className='text-xs text-slate-300 text-right'>3 minutes ago</div>
          <div className='text-xs text-blue-400 text-right'>Google Inc.</div>
        </div>
      </div>
    </div>
  )
}

export default RandomItemsGrid