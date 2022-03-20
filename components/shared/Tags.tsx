import React from 'react'
import _ from 'lodash'



interface Props {
  tags: string[]
  show?: number
}

function Tags({tags, show}: Props) {
  const colors = _.shuffle([
    'text-blue-600 bg-blue-200',
    'text-red-600 bg-red-200',
    'text-orange-600 bg-orange-200',
    'text-amber-600 bg-amber-200',
    'text-emerald-600 bg-emerald-200',
    'text-teal-600 bg-teal-200',
    'text-indigo-600 bg-indigo-200',
    'text-purple-600 bg-purple-200',
    'text-pink-600 bg-pink-200',
  ])

  return (
    <>
      {
        tags.slice(0, show ?? tags.length).map((tag, index) => (
          <span key={index} className={`text-xs font-semibol inline-block py-1 px-2 rounde last:mr-0 mr-1 ${colors[Math.floor(Math.random() * colors.length)]}`}>
            {tag}
          </span>
        ))
      }
  </>
  )
}

export default Tags