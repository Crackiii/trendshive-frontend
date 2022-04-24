/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import React, { useEffect, useMemo, useState } from 'react'
import { useWindowSize } from 'react-use';
import { usePageContext } from './PageContext'

function NavBar() {
  const { width } = useWindowSize();
  const { toggleNavBar, setToggleNavBar } = usePageContext()
  const [initialWidth, setInitialWidth] = useState('calc(100vw - 480px)');
  const history = useRouter()
  const [value, setValue] = useState('')

  const calculatedWidth = useMemo(()=> {
    let initialWidth = 'calc(100vw - 480px)';

    if(width < 1024) {
      initialWidth = 'calc(100vw - 170px)'
    } else {
      initialWidth = 'calc(100vw - 480px)'
    }

    return initialWidth

  }, [width])


  useEffect(() => {
    setInitialWidth(calculatedWidth)
  }, [calculatedWidth])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    history.push(`/search?q=${value}`)
  }

  return (
    <div className=' bg-white flex justify-start ' style={{height: '60px'}}>
      <div className='flex flex-row justify-start items-center px-6 min-h-full w-40 md:w-60'>
        <div className='cursor-pointer' onClick={() => {
          setToggleNavBar(!toggleNavBar)
        }}>
          <img className='w-6 h-6 opacity-60 hover:opacity-100' src='/icons/hamburger-30-60/30.png' alt='icon' />
        </div>
        <div className='w-9 h-9 ml-6 rounded-full overflow-hidden cursor-pointer' onClick={() => history.push('/')}>
          <img src='/logo.jpeg' alt='logo' />
        </div>
      </div>
      <div style={{width: initialWidth}} className='relative w-full'>
        <div className='absolute h-full flex flex-row justify-start items-center -ml-3 sm:ml-0 sm:px-0 md:px-4'>
          <img src='/icons/mic-30-60/30.png' alt='mic' className='opacity-30 w-6 h-6 hover:opacity-90 cursor-pointer' />
        </div>
        <form onSubmit={onSubmit} className='h-full w-full'>
          <input 
            type={'text'} 
            placeholder='Search and discover new trends...' 
            onChange={(ev) => setValue(ev.target.value)}
            value={value}
            className=' bg-white font-light h-full outline-none pl-3 sm:pl-6 md:pl-12 pr-0 sm:pr-3 md:pr-12 text-base w-full'/>
        </form>
      </div>
      <div className='relative flex justify-end items-center px-6 w-20 md:w-60'>
        {
          width < 1350 && 
          <div className='cursor-pointer' onClick={() => {
              setToggleNavBar(!toggleNavBar)
            }}>
            <img className='w-6 h-6 opacity-60 hover:opacity-100' src='/icons/menu-30-60/30.png' alt='icon' />
          </div>
        }
      </div>
    </div>
  )
}

export default NavBar