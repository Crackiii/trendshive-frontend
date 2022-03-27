import React from 'react'
import TopBar from '../shared/TopBar'
import TopGrid from './MixedTopGrid'
import SmallGrid from './SmallGrid'
import SimpleGrid from './SimpleGrid'
import RandomItemsGrid from './RandomItemsGrid'
import TrendingHeading from '../shared/TrendingHeading'
import HomeFooter from '../shared/HomeFooter'

interface Props {
  stories: any[]
}
export const validURL = (str: string) =>  {
  return !!/^(ftp|http|https):\/\/[^ "]+$/.test(str);
}

function HomePage(props: Props) {

  const storiesWithImages = props?.stories?.filter(story => {
    if(story.images.length > 0) {
      const isValidUrl = story.images.find(validURL)
     
      if(isValidUrl) {
        story.images = [isValidUrl]
        return story
      }
    }
  }).slice(0,8)
  const storiesWithImagesIds = storiesWithImages.map(s => s.id)
  const restOfStories = props?.stories?.filter(story => !storiesWithImagesIds.includes(story.id))

  return (
    <div>
      <TopBar />
      <TopGrid gridStories={storiesWithImages} />
      <TrendingHeading title='Trending now' />
      <SmallGrid smallGridStories={restOfStories.splice(0, 12)} />
      <TrendingHeading title={`Today's trends`} />
      <SimpleGrid simpleGridStories={restOfStories.splice(0, 8)} />
      <TrendingHeading title={`Latest Updates`} />
      <RandomItemsGrid randomItemsGrid={restOfStories.splice(0, 12)} />
      <HomeFooter />
    </div>
  )
}

export default HomePage