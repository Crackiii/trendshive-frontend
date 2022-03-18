import React from 'react'
import TopBar from './TopBar'
import TopGrid from './MixedTopGrid'
import SmallGrid from './SmallGrid'

function HomePage() {
  return (
    <div>
      <TopBar />
      <TopGrid />
      <div className='p-2' />
      <SmallGrid />
    </div>
  )
}

export default HomePage