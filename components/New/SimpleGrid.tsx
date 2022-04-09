/* eslint-disable @next/next/no-img-element */
import React from 'react'
import SimpleGridItem from './SimpleGridItem'

interface Props {
  stories: any[]
}

function SimpleGrid(props: Props) {

  return (
    <div>
      <div className='grid-rows-1 grid-cols-1 gap-3 grid-flow-row sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
          props.stories.map((item, index) => (
            <SimpleGridItem key={index} item={item} />
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

export default SimpleGrid