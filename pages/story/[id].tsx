import React from 'react'
import {useRouter} from 'next/router'
import TopBar from '../../components/shared/TopBar'
import HomeFooter from '../../components/shared/HomeFooter'

function Story(props: any) {

  const router = useRouter()

  return (
    <>
      <TopBar />
        <div>Story - {router.query.id}</div>
      <HomeFooter />
    </>
  )
}

export default Story
