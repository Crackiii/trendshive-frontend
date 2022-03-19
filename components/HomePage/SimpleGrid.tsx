/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { gridItems } from './data'
import SimpleGridItem from './SimpleGridItem'

function SimpleGrid() {
  return (
    <div className='grid-rows-1 grid-cols-1 gap-3 grid-flow-row sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-96'>
      {
        gridItems.slice(0,8).map((item, index) => (
          <SimpleGridItem key={index} item={item} />
        ))
      }
    </div>
  )
}

export default SimpleGrid