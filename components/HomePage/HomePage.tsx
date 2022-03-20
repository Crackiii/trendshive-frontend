import React from 'react'
import TopBar from './TopBar'
import TopGrid from './MixedTopGrid'
import SmallGrid from './SmallGrid'
import SimpleGrid from './SimpleGrid'
import RandomItemsGrid from './RandomItemsGrid'

function HomePage() {
  return (
    <div>
      <TopBar />
      <TopGrid />
      <div className='p-2' />
      <SmallGrid />
      <div className='p-2' />
      <SimpleGrid />
      <div className='p-2' />
      {/* <RandomItemsGrid /> */}
    </div>
  )
}

export default HomePage