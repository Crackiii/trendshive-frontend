/* eslint-disable @next/next/no-img-element */
import React from 'react'

type Item = {
  title: string;
  desc: string;
  image: string;
  source: string
  category: string
}

interface Props {
  item: Item
}

function SimpleGridItem({item}: Props) {
  return (
    <div className="mb-2 sm:mb-0 px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">Jan 15, 2022</span> 
        <a className="px-3 py-1 font-bold text-gray-100 transition-colors duration-200 text-xs transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">{item.category}</a>
      </div> 
      <div className="mt-2">
        <a href="#" className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">{item.title}</a> 
        <p className="mt-2 dark:text-gray-300 text-slate-400 font-light text-sm ">{item.desc}</p>
      </div> 
      <div className="flex items-center justify-between mt-4">
        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Read more ⟶</a> 
        <div className="flex items-center">
          <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">{item.source}</a>
        </div>
      </div>
    </div>
  )
}

export default SimpleGridItem