/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { useWindowSize } from 'react-use'
import { usePageContext } from './PageContext'

type MenuItem = {
  label: string
  value: string
  icon_30?: string
  icon_60?: string
}

export const menuItems: MenuItem[] = [

  {
    label: 'News',
    value: 'news',
    icon_30: '/icons/news-30-60/30.png',
    icon_60: '/icons/news-30-60/60.png'  
  },
  {
    label: 'Sports',
    value: 'sports',
    icon_30: '/icons/sports-30-60/30.png',
    icon_60: '/icons/sports-30-60/60.png'
  },
  {
    label: 'Trending',
    value: 'trending',
    icon_30: '/icons/trends-30-60/30.png',
    icon_60: '/icons/trends-30-60/60.png'  
  },
  {
    label: 'Business',
    value: 'business',
    icon_30: '/icons/business-30-60/30.png',
    icon_60: '/icons/business-30-60/60.png'
  },
  {
    label: 'Health',
    value: 'health',
    icon_30: '/icons/health-30-60/30.png',
    icon_60: '/icons/health-30-60/60.png'  
  },
  {
    label: 'Shopping',
    value: 'shopping',
    icon_30: '/icons/shopping-30-60/30.png',
    icon_60: '/icons/shopping-30-60/60.png'  
  },
  {
    label: 'Entertainment',
    value: 'entertainment',
    icon_30: '/icons/entertainment-30-60/30.png',
    icon_60: '/icons/entertainment-30-60/60.png'  
  },
  {
    label: 'Science/Tech',
    value: 'technology',
    icon_30: '/icons/technology-30-60/30.png',
    icon_60: '/icons/technology-30-60/60.png'  
  },
  {
    label: 'Fashion',
    value: 'fashion',
    icon_30: '/icons/fashion-30-60/30.png',
    icon_60: '/icons/fashion-30-60/60.png'  
  },
  {
    label: 'Travel',
    value: 'travel',
    icon_30: '/icons/travel-30-60/30.png',
    icon_60: '/icons/travel-30-60/60.png'  
  },
  {
    label: 'Food',
    value: 'food',
    icon_30: '/icons/food-30-60/30.png',
    icon_60: '/icons/food-30-60/60.png'  
  },
  {
    label: 'Culture',
    value: 'culture',
    icon_30: '/icons/culture-30-60/30.png',
    icon_60: '/icons/culture-30-60/60.png'  
  },
  {
    label: 'Cryptocurrency',
    value: 'cryptocurrency',
    icon_30: '/icons/crypto-30-60/30.png',
    icon_60: '/icons/crypto-30-60/60.png'  
  },
  {
    label: 'Learning',
    value: 'learning',
    icon_30: '/icons/learning-30-60/30.png',
    icon_60: '/icons/learning-30-60/60.png'  
  },
  {
    label: 'Gaming',
    value: 'gaming',
    icon_30: '/icons/gaming-30-60/30.png',
    icon_60: '/icons/gaming-30-60/60.png'  
  },
  {
    label: 'Live',
    value: 'live',
    icon_30: '/icons/live-30-60/30.png',
    icon_60: '/icons/live-30-60/60.png'  
  },
  {
    label: 'Jobs',
    value: 'jobs',
    icon_30: '/icons/jobs-30-60/30.png',
    icon_60: '/icons/jobs-30-60/60.png'  
  },
]

interface Props {}

function SideBar(_: Props) {
  const { width } = useWindowSize();
  const {toggleNavBar, setToggleNavBar} = usePageContext()
  const params = useRouter().query
  const sideBarRef = useRef(null)

  const handleClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    if(ev.target !== sideBarRef.current) {
      setToggleNavBar(false)
    }
  }

  //overflow-hidden overflow-y-auto
  return (
    <div>
      {
        width > 1024 && 
        <div className='py-3 overflow-hidden overflow-y-auto' style={{height: 'calc(100vh - 60px)', width: toggleNavBar ? '70px' :'240px', overflow: 'overlay'}}>
          {
            menuItems.map((item, index) => 
              {
                const isActive = params.category === item.value
                return (
                  <Link key={index} href={`/categories/${item.value}`}>
                    <a>
                      <div 
                        className={`flex flex-row justify-start items-center h-10 px-6 mb-2 rounded-lg cursor-pointer group ${isActive ? 'bg-white shadow-md shadow-slate-200' : 'shadow-none'} hover:bg-white hover:bg-opacity-60`}>
                        <div className='w-6 h-6'>
                          <img src={item.icon_30} className={`min-w-full min-h-full object-cover ${isActive ? 'opacity-100' : 'opacity-50'}  group-hover:opacity-100`} alt={item.label} />
                        </div>
                        {!toggleNavBar && 
                          <span className={`ml-6 text-sm tracking-wide  ${isActive ? 'text-slate-900 font-normal' : 'text-slate-700 font-light'}`}>
                            {item.label}
                          </span>
                        }
                      </div>
                    </a>
                  </Link>
                )
              }
            )
          }
        </div>
      }
      {
         width < 1024 && toggleNavBar &&
         <div className='fixed w-full h-full left-0 top-0 z-50 bg-slate-900 bg-opacity-50' onClick={handleClick}>
          <div className='py-3 overflow-hidden overflow-y-auto bg-white' style={{height: '100vh', width: '240px', overflow: 'overlay'}}>
            <div className='flex flex-row justify-start items-center px-6'>
              <div className='cursor-pointer' onClick={() => ''}>
                <img className='w-6 h-6 opacity-60 hover:opacity-100' src='/icons/hamburger-30-60/30.png' alt='icon' />
              </div>
              <div className='w-9 h-9 ml-6 rounded-full overflow-hidden cursor-pointer' onClick={() => ''}>
                <img src='/logo.jpeg' alt='logo' />
              </div>
            </div>
            <div className='mt-6' ref={sideBarRef}>
              {
                menuItems.map((item, index) => 
                  {
                    const isActive = params.category === item.value
                    return (
                      <Link key={index} href={`/categories/${item.value}`}>
                        <a>
                          <div 
                            className={`flex flex-row justify-start items-center h-10 px-6 mb-2 rounded-lg cursor-pointer group ${isActive ? 'bg-white shadow-md shadow-slate-200' : 'shadow-none'} hover:bg-white hover:bg-opacity-60`}>
                            <div className='w-6 h-6'>
                              <img src={item.icon_30} className={`min-w-full min-h-full object-cover ${isActive ? 'opacity-100' : 'opacity-50'}  group-hover:opacity-100`} alt={item.label} />
                            </div>
                            <span className={`ml-6 text-sm  ${isActive ? 'text-slate-900 font-normal' : 'text-slate-700 font-light'}`}>
                              {item.label}
                            </span>
                          </div>
                        </a>
                      </Link>
                    )
                  }
                )
              }
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default SideBar
