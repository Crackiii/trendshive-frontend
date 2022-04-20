import React from 'react'
import Youtube from '../../tiles/Youtube'
import CategoryHead from './CategoryHead'
import Article from '../../tiles/Article';
import Link from '../../tiles/Link';
import { usePageContext } from '../../PageContext';

export type Category = {
  name: string;
  label: string;
  icon: string;
  videos: any[]
  articles: any[]
  search: any[]
}

const options = { 
  className: "os-theme-thin-light",
  resize               : "none",
  sizeAutoCapable      : true,
  clipAlways           : true,
  clickScrolling: true,
  normalizeRTL         : true,
  paddingAbsolute      : false,
  autoUpdate           : null,
  overflowBehavior : {
    x : "scroll",
    y : "hidden"
  },
  scrollbars: 
  { 
    dragScrolling : true, 
    touchSupport: true, 
    autoHide: 'leave' 
  },
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
      <div className={'sm:masonry-1-col md:masonry-2-col lg:masonry-3-col xl:masonry-5-col box-border mx-auto before:box-inherit after:box-inherit'} style={{width: `calc(100vw - ${toggleNavBar ? '350px' : '520px'})`}}>
        {
          props.videos.map((video, index) => (
            <Youtube key={index} video={video} width={'mb-5'} />
          ))
        }
      </div>
      <div className={'mt-10 sm:masonry-1-col md:masonry-2-col lg:masonry-3-col xl:masonry-4-col box-border mx-auto before:box-inherit after:box-inherit'} style={{width: `calc(100vw - ${toggleNavBar ? '350px' : '520px'})`}}>
      {
        props.articles.map((article, index) => (
          <Article key={index} article={article} width={'mb-5'} />
        ))
      }
      </div>
      <div className={'mt-10 sm:masonry-1-col md:masonry-2-col lg:masonry-3-col xl:masonry-3-col box-border mx-auto before:box-inherit after:box-inherit '} style={{width: `calc(100vw - ${toggleNavBar ? '350px' : '520px'})`}}>
        {
          props.search.map((search, index) => (
            <Link key={index} search={search} width={'mb-5 border-none'} />
          ))
        }
      </div>
    </div>
  )
}

export default Category