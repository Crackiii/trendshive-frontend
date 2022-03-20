import React from 'react'
import { gridItems } from './data'
import SmallGridItem from './SmallGridItem'

function SmallGrid() {
  return (
    <div>
      <div className=' gap-4 sm:grid-rows-1 grid-cols-1 sm:gap-5 grid-flow-row sm:grid sm:grid-cols-2 md:grid-cols-3'>
        {
          gridItems.slice(2, 16).map((item, index) => (
            <SmallGridItem key={index} item={item} />
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

export default SmallGrid