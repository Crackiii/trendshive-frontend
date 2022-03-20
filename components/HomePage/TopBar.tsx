/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import styles from './styles.module.css'

function TopBar() {
  return (
    <div className={`flex flex-row justify-start h-16 ${styles['top-bar']} relative`}>
      <div className={`text-lg flex flex-col justify-center items-center min-h-full px-6 sm:px-14`}>
        <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden'>
          <img src='/logo.jpeg' alt='logo' className='object-cover w-full min-w-full h-full min-h-full'/>
        </div>
      </div>
      <div className='w-full py-3 sm:py-2 px-0 sm:px-30 md:px-2 lg:px-20 xl:px-80 2xl:px-0 2xl:w-2/4 2xl:m-auto relative'>
        <input type={'text'} placeholder={'Search anything...'} className='focus:shadow-xl h-10 sm:h-12 focus:border-blue-400 w-full p-4 font-light bg-white border bg-opacity-70 outline-none rounded-full text-base'/>
      </div>
      <div className='flex flex-col justify-center items-end px-6 sm:px-14'></div>
    </div>
  )
}

export default TopBar