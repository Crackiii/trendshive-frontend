import React from 'react'
import ListItem from './ListItem'

interface Props {
  articles: any[]
}

function RelatedArticles(props: Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {

  const {articles, ...rest} = props

  return (
    <div {...rest}>
      <div className=' col-start-4 col-span-1 h-auto' >
        <div className='block'>
          <span className='text-white bg-slate-800 py-1 px-5 block uppercase text-center tracking-wider'>Related articles</span>
        </div>
        <div className='grid overflow-hidden gap-2 overflow-y-auto mt-5'>
          {
            articles.map((article, index) => (
              <ListItem 
                key={index} 
                item={{
                  desc: article.snippet,
                  title: article.title,
                  image: article.image.imageUrl,
                  source: article.source,
                  category: 'Static',
                  favicon: 'https://ssl.gstatic.com/adsense/apps/static/bidi/adsense3_antipasti_server_20220316-04_RC00/common/resources/favicon.ico'
                }}  
              />
            ))
          }
          
        </div>
      </div>
    </div>
  )
}

export default RelatedArticles