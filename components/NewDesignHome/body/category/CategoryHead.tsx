/* eslint-disable @next/next/no-img-element */
import React from 'react'
interface Props {
  name: string
  image: string
  link: string
}

function CategoryHead(props: Props) {
  return (
    <div className='flex flex-row justify-between items-center mb-8'>
      <div className='flex flex-row justify-start items-center'>
        <div className='w-7 h-7 overflow-hidden'>
          <img src={props.image} alt={props.name} />
        </div>
        <div className='pl-2 text-slate-600'>{props.name}</div>
      </div>
      <div>
      </div>
      <div>
        <a href="/home" className="relative inline-flex items-center justify-start py-1 pl-4 pr-12 overflow-hidden font-light transition-all duration-150 ease-in-out rounded-sm hover:pl-10 hover:pr-6 bg-gray-50 group">
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-150 ease-in-out bg-slate-600 group-hover:h-full"></span>
          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="relative w-full text-left transition-colors duration-200 ease-in-out text-sm group-hover:text-white">View all</span>
        </a>
      </div>
    </div>
  )
}

export default CategoryHead