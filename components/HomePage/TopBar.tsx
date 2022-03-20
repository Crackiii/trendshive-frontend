/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react'
import { gridItems } from './data'
import styles from './styles.module.css'

function TopBar() {

  const [value, setValue] = useState('')

  return (
    <div className={`flex flex-row justify-start h-16 bg-white relative shadow-sm`}>
      <div className={`text-lg w-10 flex flex-col justify-center items-center min-h-full px-6 sm:px-14`}>
        <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden'>
          <img src='/logo.jpeg' alt='logo' className='object-cover w-full min-w-full h-full min-h-full'/>
        </div>
      </div>
      <div className='w-full py-3 sm:py-2 px-0 sm:px-30 md:px-2 lg:px-20 xl:px-80 2xl:px-0 2xl:w-2/4 2xl:m-auto relative'>
        <input type='text' onChange={(ev) => setValue(ev.target.value)} placeholder={'Try searching anything...'} className='focus:shadow-xl h-10 sm:h-12 border focus:border-blue-400 bg-slate-100 w-full p-4 font-light outline-none rounded-md text-base'/>
        {
          value.length > 0 && 
          <div className='block h-96 relative z-30 bg-white overflow-hidden overflow-y-auto shadow-2xl'>
            <div className='block'>
              <ul className='px-5'>
                {
                  gridItems.map((item, index) => (
                  <li className='flex justify-start border-b border-slate-100 py-4' key={index}>
                    <div className=' w-14 h-14 shadow-lg shadow-slate-400 rounded-2xl overflow-hidden relative'>
                      <img className='object-cover min-h-full min-w-full' src={item.image} alt='' />
                    </div>
                    <div className='flex flex-col justify-center pl-4'>
                      <div className='text-md font-medium text-slate-700'>{item.title.slice(0, 30)}</div>
                      <div className='text-sm font-light text-slate-400 mt-1 tracking-wide'>{item.desc.slice(0, 30)}</div>
                    </div>
                </li>
                  ))
                }
                
              </ul>
            </div>
          </div>
        }
      </div>
      <div className='flex flex-col justify-center items-end px-6 sm:px-14'></div>
    </div>
  )
}

export default TopBar