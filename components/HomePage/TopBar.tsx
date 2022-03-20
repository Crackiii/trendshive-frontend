/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import styles from './styles.module.css'

function TopBar() {
  return (
    <div className={`flex flex-row justify-start h-18 ${styles['top-bar']}`}>
      <div className={`text-lg flex flex-col justify-center items-center min-h-full px-6 sm:px-14`}>
        <div className='w-12 h-12 rounded-full overflow-hidden'>
          <img src='/logo.jpeg' alt='logo' className='object-cover w-full min-w-full h-full min-h-full'/>
        </div>
      </div>
      <div className='flex flex-col justify-center items-left p-2 w-full px-0 sm:px-30 md:px-2 lg:px-20 xl:px-60'>
        <input type={'text'} placeholder={'Search anything...'} className='focus:shadow-md min-h-full w-full p-4 font-light bg-white border border-blue-900 border-opacity-20 outline-none rounded-none' />
      </div>
      <div className='flex flex-col justify-center items-end px-6 sm:px-14'></div>
    </div>
  )
}

export default TopBar