import React from 'react'
import TopBar from './TopBar'
import TopGrid from './MixedTopGrid'
import SmallGrid from './SmallGrid'
import SimpleGrid from './SimpleGrid'

function HomePage() {
  return (
    <div>
      <TopBar />
      <TopGrid />
      <div className='p-2' />
      <SmallGrid />
      <div className='p-2' />
      <SimpleGrid />
    </div>
  )
}

export default HomePage