import React from 'react'
import Youtube from '../../tiles/Youtube'
import CategoryHead from './CategoryHead'
import Article from '../../tiles/Article';
import Link from '../../tiles/Link';
import { usePageContext } from '../../PageContext';
import RandomData from '../../tiles/RandomData';

export type Category = {
  name: string;
  label: string;
  icon: string;
  videos: any[]
  articles: any[]
  search: any[]
}

function Category(props: Category) {

  const {toggleNavBar} = usePageContext()

  const noData = !props.articles.length && !props.videos.length && !props.search.length

  if(noData) {
    return <></>
  }

  return (
    <div className='mt-20 pb-20 border-b border-slate-200 ' >
      <CategoryHead name={props.name} label={props.label} image={props.icon} link={''} />
      <div className='w-full mt-10'>
          <div className='sm:masonry-1-col md:masonry-2-col lg:masonry-3-col xl:masonry-5-col box-border mx-auto before:box-inherit after:box-inherit'>
            {
              [...props.articles, ...props.videos, ...props.search].map((item: any, index: number) => (
                <div key={index} className='mb-4'>
                  <RandomData content={item} width={'min-w-full bg-white'} />
                </div>
              ))
            }
          </div>
      </div>
    </div>
  )
}

export default Category