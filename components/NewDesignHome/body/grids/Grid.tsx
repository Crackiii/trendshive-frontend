import React, { useMemo } from 'react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import GridItem from './GridItem';
import { useWindowSize } from 'react-use';

interface Props {
  articles?: any[]
}

function TopGrid(props?: Props) {
  const {width} = useWindowSize()
  const gridItemStyles: string[] = [
    `flex col-span-2 md:row-span-2 md:col-span-1 md:col-start-1 md:row-start-1`,
    `hidden md:flex  md:row-span-1 md:col-span-2 md:col-start-2 md:row-start-1`,
    `hidden md:flex md:row-span-1 md:col-span-1 md:col-start-2 md:row-start-2`,
    `hidden md:flex md:row-span-1 md:col-span-1 md:col-start-3 md:row-start-2`,
    `hidden lg:flex lg:row-span-1 lg:col-span-1 lg:col-start-4 lg:row-start-1`,
    `hidden lg:flex lg:row-span-1 lg:col-span-1 lg:col-start-4 lg:row-start-2 xl:col-span-2`,
    `hidden xl:flex xl:row-span-1 xl:col-span-1 xl:col-start-5 xl:row-start-1`,
    `hidden 2xl:flex 2xl:row-span-2 2xl:col-span-1 2xl:col-start-6 2xl:row-start-1`
  ]

  const images = [
    '/images/cryptocurrency.jpeg',
    '/images/entertainment.jpeg',
    '/images/fashion.jpeg',
    '/images/gaming.jpeg',
    '/images/learning.jpeg',
    '/images/technology.jpeg',
    '/images/trending.jpeg',
    '/images/travel.jpeg',
  ]
  const bodyWidth = useMemo(() => width, [width])

  return (
    <>
      <div className="hidden sm:grid grid-rows-1 grid-cols-1 gap-1 grid-flow-row sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {
          props?.articles?.map((item, index) => (
              <div key={index} className={`${gridItemStyles[index]} h-60 min-h-full`}>
                <GridItem item={{...item, image: images[index]}} />
              </div>
          ))
        }
      </div>
      <div className='sm:hidden h-96'>
        <CarouselProvider
          naturalSlideWidth={100}
          className="h-96"
          naturalSlideHeight={100}
          totalSlides={gridItemStyles.length}
        >
          <Slider>
              {
                props?.articles?.map((item, index) => (
                  <Slide index={index} key={index}>
                    <GridItem item={{...item, image: images[index]}} />
                  </Slide>
                ))
              }
        </Slider>
      </CarouselProvider>
      </div>
    </>
    
  )
}

export default TopGrid