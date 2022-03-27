/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { gridItems } from '../HomePage/data'
import Tags from '../shared/Tags'
import MoreInterestingItem from './MoreInterestingItem'

interface Props {
  allStories: any[]
}

function MoreInteresting({allStories}: Props) {

  const [offset, setOffset] = useState<number>(15)


  return (
    <>
    <div className="md:masonry-2-col lg:masonry-3-col xl:masonry-4-col box-border mx-auto before:box-inherit after:box-inherit">
      { allStories.slice(0, offset).map((item, index) => (<MoreInterestingItem item={item} key={index} />)) }
    </div>
    <div className='flex justify-center mt-5'>
        <button 
          disabled={offset === 80}
          onClick={() => setOffset(offset + 5)}
          className="inline-block max-w-fit border border-slate-700 hover:bg-slate-700 hover:text-white hover:shadow-lg transition-all font-normal py-1 px-6">
          See more +
        </button>
      </div>
    </>
  )
}

export default MoreInteresting