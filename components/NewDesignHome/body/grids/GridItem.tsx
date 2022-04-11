/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
import styles from './styles.module.css'

interface Props {
  item: any
}

// generate 8 random titles with at between 5 to 10 words
const titles = [
  'Lorem ipsum dolor sit amet',
  'consectetur adipiscing elit',
  'sed do eiusmod tempor incididunt',
  'ut labore et dolore magna aliqua',
  'Ut enim ad minim veniam',
  'quis nostrud exercitation ullamco',
  'laboris nisi ut aliquip ex ea commodo',
  'consequat. Duis aute irure dolor in',
  'reprehenderit in voluptate velit esse',
  'cillum dolore eu fugiat nulla pariatur',
  'Excepteur sint occaecat cupidatat non',
  'proident, sunt in culpa qui officia',
  'deserunt mollit anim id est laborum',
  'Lorem ipsum dolor sit amet',
  'consectetur adipiscing elit',
  'sed do eiusmod tempor incididunt',
  'ut labore et dolore magna aliqua',
  'Ut enim ad minim veniam',
  'quis nostrud exercitation ullamco',
  'laboris nisi ut aliquip ex ea commodo',
  'consequat. Duis aute irure dolor in',
  'reprehenderit in voluptate velit esse',
  'cillum dolore eu fugiat nulla pariatur',
]

// choose random title from titles array
const getRandomTitle = () => {
  const index = Math.floor(Math.random() * titles.length)
  return titles[index]
}

function GridItem({item}: Props) {
  const title = 'Russia-Ukraine War News: Live Updates'
  const image = item.image
  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .'
  const source = 'picsum.photos'

  return (
    <div className='h-96 sm:h-auto w-full relative group overflow-hidden rounded-md '>
      <Link href={`/story/${item.id}`} passHref>
        <span><a>
          <div className='w-full h-full min-h-full min-w-full relative sm:group-hover:scale-125 transition'>
            <img src={image} alt='image' className='object-cover w-full min-w-full h-full min-h-full' />
          </div>
          <div className='absolute z-10 group top-0 left-0 w-full h-full bg-slate-900 bg-opacity-60 hover:bg-opacity-70 flex flex-col justify-end cursor-pointer overflow-hidden'>
            <div className='p-2'>
              <div className='text-lg text-white mb-2 group-hover:first:text-blue-400 group-hover:first:underline'>
                {getRandomTitle()}
              </div>
              <div className=' text-gray-300 text-xs font-light mb-2 tracking-wider'>
                {description}
              </div>
              <div className=' text-white text-xs mb-1 font-mono text-right'>
                {source}
              </div>
            </div>
          </div>
        </a>
        </span>
      </Link>

    </div>
  )
}

export default GridItem