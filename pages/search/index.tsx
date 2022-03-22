import React from 'react'
import { useRouter } from 'next/router'
import TopBar from '../../components/shared/TopBar'
import HomeFooter from '../../components/shared/HomeFooter'

function Search() {

  const params = useRouter()

  return (
    <>
      <TopBar />
        <div>Showing results for: <b>{params?.query['query']}</b></div>
      <HomeFooter />
    </>
    
  )
}

export default Search