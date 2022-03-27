/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import Tags from '../shared/Tags'
import { gridItems } from './data'
import { validURL } from './HomePage'
import * as dates from 'date-fns'
import { getHost } from './GridItem'
import RandomGridItem from './RandomGridItem'

interface Props {
  randomItemsGrid: any[]
}

function RandomItemsGrid(props: Props) {

  return (
    <>
    <div className="md:masonry-2-col lg:masonry-3-col xl:masonry-4-col box-border mx-auto before:box-inherit after:box-inherit">
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