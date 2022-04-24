import React from 'react'
import CategoryHead from './CategoryHead'
import RandomData from '../../tiles/RandomData';
import Masonry from 'react-masonry-css'

export type Category = {
  name: string;
  label: string;
  icon: string;
  videos: any[]
  articles: any[]
  search: any[]
}

export const commonBreakPoints = {
  default: 5,
  1536: 3,
  1280: 4,
  1024: 3,
  768: 2,
  640: 1
};

export const adsBreakPoints = {
  default: 4,
  1280: 4,
  1024: 3,
  768: 2,
  640: 1
};

function Category(props: Category) {

  const noData = !props.articles.length && !props.videos.length && !props.search.length

  if(noData) {
    return <></>
  }

  return (
    <div className='mt-10 pb-10 border-b border-slate-300 ' >
      <CategoryHead name={props.name} label={props.label} image={props.icon} link={''} />
      <div className='w-full'>
          <Masonry breakpointCols={commonBreakPoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column" >
            {
              [...props.articles, ...props.videos, ...props.search].map((item: any, index: number) => (
                <div key={index} className='mb-4'>
                  <RandomData content={item} width={'min-w-full bg-white'} />
                </div>
              ))
            }
          </Masonry>
      </div>
    </div>
  )
}

export default Category