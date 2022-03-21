import React from 'react'
import TopBar from '../../components/shared/TopBar'
import HomeFooter from '../../components/shared/HomeFooter'
import StoryContent from '../../components/StoryPage/StoryContent'
import { story } from '../../components/StoryPage/data'
import RelatedArticles from '../../components/StoryPage/RelatedArticles'
import RelatedQueries from '../../components/StoryPage/RelatedQueries'
import RelatedSearches from '../../components/StoryPage/RelatedSearches'
import MoreInteresting from '../../components/StoryPage/MoreInteresting'
import TrendingHeading from '../../components/shared/TrendingHeading'

function Story() {

  return (
    <>
      <TopBar />
        <div className='grid grid-cols-1 gap-4 grid-rows-1 md:grid-cols-5 md:p-10'>
          <StoryContent className='col-start-1 col-span-5 md:col-span-3' />
          <RelatedArticles articles={story.articles} className={'col-start-1 col-span-5 md:col-span-2 xl:col-span-1 md:col-start-4 '} />
        </div>
        <div className='md:p-10'>
          <TrendingHeading title='More popular topics' />
          <MoreInteresting />
        </div>
        
      <HomeFooter />
    </>
  )
}

export default Story
