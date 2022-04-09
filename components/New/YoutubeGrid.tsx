import React from 'react'
import YoutubeTile from './YoutubeTile'

interface Props {
  stories: any[]
}

function YoutubeGrid({stories}: Props) {
  return (
    <div>
    <div className='mt-5 grid-rows-1 grid-cols-1 gap-3 grid-flow-row sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {
        stories.map((item, index) => (
          <YoutubeTile key={index} item={item} />
        ))
      }
    </div>
    <div className='flex justify-center mt-5'>
      {/* <button className="inline-block max-w-fit border border-slate-700 hover:bg-slate-700 hover:text-white hover:shadow-lg transition-all font-normal py-1 px-6">
        See more +
      </button> */}
    </div>
  </div>
  )
}

export default YoutubeGrid