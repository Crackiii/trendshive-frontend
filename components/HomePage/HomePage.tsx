import React, { useEffect } from 'react'
import TopBar from './TopBar'
import TopGrid from './MixedTopGrid'
import SmallGrid from './SmallGrid'
import SimpleGrid from './SimpleGrid'
import RandomItemsGrid from './RandomItemsGrid'
import TrendingHeading from './TrendingHeading'
import axios from 'axios'

function HomePage() {

  return (
    <div>
      <TopBar />
      <TopGrid />
      <TrendingHeading title='Trending now' />
      <SmallGrid />
      <TrendingHeading title={`Today's trends`} />
      <SimpleGrid />
      <TrendingHeading title={`Latest Updates`} />
      <RandomItemsGrid />
    </div>
  )
}

export default HomePage