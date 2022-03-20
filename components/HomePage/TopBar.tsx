/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import styles from './styles.module.css'

function TopBar() {
  return (
    <div className={`flex flex-row justify-start h-18 pl-10 pr-10 ${styles['top-bar']}`}>
      <div className={`text-lg flex flex-1 flex-col justify-center w-full min-h-full`}>
        <div className='  border w-12 h-12 rounded-full overflow-hidden'>
          <img src='/logo.jpeg' alt='logo' className='object-cover w-full min-w-full h-full min-h-full'/>
        </div>
      </div>
      <div className='flex flex-col justify-center w-96 flex-1 p-2'>
        <input type={'text'} placeholder={'Search anything...'} className='focus:shadow-md min-h-full p-4 font-light bg-white border border-blue-900 border-opacity-20 outline-none rounded-none' />
      </div>
      <div className='flex flex-1'></div>
    </div>
  )
}

export default TopBar