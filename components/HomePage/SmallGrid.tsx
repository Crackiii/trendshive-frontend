import React from 'react'
import { gridItems } from './data'
import SmallGridItem from './SmallGridItem'

function SmallGrid() {
  return (
    <div className='grid-rows-1 grid-cols-1 gap-3 grid-flow-row sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {
        gridItems.slice(4, 16).map((item, index) => (
          <SmallGridItem key={index} item={item} />
        ))
      }
     
    </div>
  )
}

export default SmallGrid