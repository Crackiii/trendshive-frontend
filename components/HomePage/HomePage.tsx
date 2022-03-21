import React from 'react'
import TopBar from '../shared/TopBar'
import TopGrid from './MixedTopGrid'
import SmallGrid from './SmallGrid'
import SimpleGrid from './SimpleGrid'
import RandomItemsGrid from './RandomItemsGrid'
import TrendingHeading from './TrendingHeading'
import axios from 'axios'
import HomeFooter from '../shared/HomeFooter'

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
      <HomeFooter />
    </div>
  )
}

export default HomePage