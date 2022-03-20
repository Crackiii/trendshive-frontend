import React from 'react'

interface Props {
  title: string
}

function TrendingHeading({title}: Props) {
  return (
    <div className='text-2xl mt-6 mb-6'>
      <span className='uppercase font-extrabold bg-slate-800 text-white p-2 px-6 text-center inline-block'>{title}</span>
    </div>
  )
}

export default TrendingHeading