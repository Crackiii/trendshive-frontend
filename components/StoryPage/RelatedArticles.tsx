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
            articles.map((item, index) => (
              <ListItem key={index} item={item} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default RelatedArticles