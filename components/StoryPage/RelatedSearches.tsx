import React from 'react'
import ListItem from './ListItem'

interface Props {
  articles: any[]
}

function RelatedSearches(props: Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {

  const {articles, ...rest} = props

  return (
    <div {...rest}>
      <div className='block'>
        <span className='text-white bg-slate-800 py-1 px-5 inline-block uppercase tracking-wider mt-5'>Related searches</span>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 sm:grid-cols-2 gap-2 overflow-hidden overflow-y-auto mt-5'>
        {
          articles.map((article, index) => (
            <ListItem 
              background='bg-gray-100'
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
  )
}

export default RelatedSearches