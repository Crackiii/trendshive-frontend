import React, { createRef } from 'react'
import Youtube from '../../tiles/Youtube'
import CategoryHead from './CategoryHead'
import styles from './styles.module.css'
import 'pure-react-carousel/dist/react-carousel.es.css';
import Article from '../../tiles/Article';
import Link from '../../tiles/Link';

export type Category = {
  name: string;
  icon: string;
  videos: any[]
  articles: any[]
  search: any[]
}

function Category(props: Category) {
  return (
    <div className='mt-20 pb-20 border-sky-500' style={{borderBottom: '2px solid skyblue'}}>
      <CategoryHead name={props.name} image={props.icon} link={''} />
      <div className={'whitespace-nowrap relative overflow-hidden hover:overflow-x-auto border' + styles.scrollbarhide} style={{width: 'calc(100vw - 520px)'}}>
        {
          props.videos.map((video, index) => (
            <Youtube key={index} video={video} />
          ))
        }
      </div>
      <div className={'mt-8 whitespace-nowrap relative overflow-hidden hover:overflow-x-auto border' + styles.scrollbarhide} style={{width: 'calc(100vw - 520px)'}}>
      {
        props.articles.map((article, index) => (
          <Article key={index} article={article} />
        ))
      }
      </div>
      <div className={'mt-8 whitespace-nowrap relative overflow-hidden hover:overflow-x-auto bg-white' + styles.scrollbarhide} style={{width: 'calc(100vw - 520px)'}}>
        {
          props.search.map((search, index) => (
            <Link key={index} search={search} />
          ))
        }
      </div>
    </div>
  )
}

export default Category