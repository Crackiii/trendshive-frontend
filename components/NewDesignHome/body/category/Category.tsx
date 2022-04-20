import React, { createRef } from 'react'
import Youtube from '../../tiles/Youtube'
import CategoryHead from './CategoryHead'
import 'pure-react-carousel/dist/react-carousel.es.css';
import Article from '../../tiles/Article';
import Link from '../../tiles/Link';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/css/OverlayScrollbars.css';
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
      <OverlayScrollbarsComponent options={options} className={'whitespace-nowrap relative z-0'} style={{width: `calc(100vw - ${toggleNavBar ? '350px' : '520px'})`}}>
        {
          props.videos.map((video, index) => (
            <Youtube key={index} video={video} />
          ))
        }
      </OverlayScrollbarsComponent>
      <OverlayScrollbarsComponent options={options} className={'mt-10 whitespace-nowrap relative z-0'} style={{width: `calc(100vw - ${toggleNavBar ? '350px' : '520px'})`}}>
      {
        props.articles.map((article, index) => (
          <Article key={index} article={article} />
        ))
      }
      </OverlayScrollbarsComponent>
      <OverlayScrollbarsComponent options={options} className={'mt-10 whitespace-nowrap relative z-0 '} style={{width: `calc(100vw - ${toggleNavBar ? '350px' : '520px'})`}}>
        {
          props.search.map((search, index) => (
            <Link key={index} search={search} />
          ))
        }
      </OverlayScrollbarsComponent>
    </div>
  )
}

export default Category