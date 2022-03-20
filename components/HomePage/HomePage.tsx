import React from 'react'
import TopBar from './TopBar'
import TopGrid from './MixedTopGrid'
import SmallGrid from './SmallGrid'
import SimpleGrid from './SimpleGrid'
import RandomItemsGrid from './RandomItemsGrid'
import TrendingHeading from './TrendingHeading'

function HomePage() {
  return (
    <div>
      <TopBar />
      <TopGrid />
      <TrendingHeading title='Trending now' />
      <SmallGrid />
      <TrendingHeading title={`Today's trends`} />
      <SimpleGrid />
      <div className='p-2' />
      {/* <RandomItemsGrid /> */}
    </div>
  )
}

export default HomePage