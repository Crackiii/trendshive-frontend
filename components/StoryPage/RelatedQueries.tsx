import React from 'react'
import Tags from '../shared/Tags'
import ListItem from './ListItem'

interface Props {
  tags: string[]
}

function RelatedQueries(props: Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {

  const {tags, ...rest} = props

  return (
    <div {...rest}>
      <div className='block'>
        <span className='text-white bg-slate-800 py-1 px-5 inline-block uppercase tracking-wider'>People also search for</span>
      </div>
      <div className='overflow-hidden overflow-y-auto mt-5'>
        <Tags tags={tags || []}/>
      </div>
    </div>
  )
}

export default RelatedQueries