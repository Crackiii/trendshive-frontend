import React from 'react'
import _ from 'lodash'
import Link from 'next/link'



interface Props {
  tags: string[]
  show?: number
}

function Tags({tags, show}: Props) {
  const colors = _.shuffle([
    'text-blue-600 bg-blue-200 hover:bg-blue-300',
    'text-red-600 bg-red-200 hover:bg-red-300',
    'text-orange-600 bg-orange-200 hover:bg-orange-300',
    'text-amber-600 bg-amber-200 hover:bg-amber-300',
    'text-emerald-600 bg-emerald-200 hover:bg-emerald-300',
    'text-teal-600 bg-teal-200 hover:bg-teal-300',
    'text-indigo-600 bg-indigo-200 hover:bg-indigo-300',
    'text-purple-600 bg-purple-200 hover:bg-purple-300',
    'text-pink-600 bg-pink-200 hover:bg-pink-300',
  ])

  if(!tags.length) return <></>

  return (
    <>
      {
        tags?.slice(0, show ?? tags.length)?.map((tag, index) => (
          <Link key={index} href={`/search?searchQuery=${tag.toLowerCase()}&offset=0&limit=20`} passHref>
            <span>
            <a className='inline-block  last:mr-0 mr-1 mb-1'>
              <span  className={`text-xs font-semibol py-1 px-2 rounde lowercase ${colors[Math.floor(Math.random() * colors.length)]}`}>
                {tag}
              </span>
            </a>
            </span>
          </Link>

        ))
      }
  </>
  )
}

export default Tags