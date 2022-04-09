import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

import React from 'react'
import RandomGridItem from './RandomGridItem';

interface Props {
  stories: any[]
}

function SliceShow({stories}: Props) {
  return (
    <div className="hidden grid-rows-1 grid-cols-1 gap-0 grid-flow-row sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
    <CarouselProvider
        naturalSlideWidth={100}
        className="h-96"
        naturalSlideHeight={100}
        totalSlides={stories.length}
        infinite
        touchEnabled
      >
        <Slider>
            {
              stories?.map((item, index) => (
                <Slide index={index} key={index}>
                   <RandomGridItem item={item} />
                </Slide>
              ))
            }
      </Slider>
    </CarouselProvider>
    </div>
  )
}

export default SliceShow