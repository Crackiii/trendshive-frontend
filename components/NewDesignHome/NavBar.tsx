/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import React from 'react'
import { usePageContext } from './PageContext'

function NavBar() {
  const { toggleNavBar, setToggleNavBar } = usePageContext()
  const history = useRouter()

  return (
    <div className=' bg-white flex justify-start ' style={{height: '60px'}}>
      <div className='  flex flex-row justify-start items-center px-6 min-h-full' style={{width: '240px'}}>
        <div className='cursor-pointer' onClick={() => {
          setToggleNavBar(!toggleNavBar)
        }}>
          <img className='w-6 h-6 opacity-60 hover:opacity-100' src='/icons/hamburger-30-60/30.png' alt='icon' />
        </div>
        <div className='w-9 h-9 ml-6 rounded-full overflow-hidden cursor-pointer' onClick={() => history.push('/')}>
          <img src='/logo.jpeg' alt='logo' />
        </div>
      </div>
      <div className='relative' style={{width: 'calc(100vw - 480px)'}}>
        <div className='absolute h-full flex flex-row justify-start items-center px-4'>
          <img src='/icons/mic-30-60/30.png' alt='mic' className='opacity-30 w-6 h-6 hover:opacity-90 cursor-pointer' />
        </div>
        <input type={'text'} placeholder='Search and discover new trends...' className=' bg-white font-light h-full outline-none px-12 text-base w-full'/>
      </div>
      <div className='relative flex justify-center items-center' style={{width: '240px'}}>
        
      </div>
    </div>
  )
}

export default NavBar