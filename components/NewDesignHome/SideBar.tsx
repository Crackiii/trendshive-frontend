/* eslint-disable @next/next/no-img-element */
import React from 'react'

type MenuItem = {
  label: string
  value: string
  icon_30?: string
  icon_60?: string
}

export const menuItems: MenuItem[] = [
  {
    label: 'Business',
    value: 'business',
    icon_30: '/icons/business-30-60/30.png',
    icon_60: '/icons/business-30-60/60.png'
  },
  {
    label: 'Sports',
    value: 'sports',
    icon_30: '/icons/sports-30-60/30.png',
    icon_60: '/icons/sports-30-60/60.png'
  },
  {
    label: 'Entertainment',
    value: 'entertainment',
    icon_30: '/icons/entertainment-30-60/30.png',
    icon_60: '/icons/entertainment-30-60/60.png'  
  },
  {
    label: 'Health',
    value: 'health',
    icon_30: '/icons/health-30-60/30.png',
    icon_60: '/icons/health-30-60/60.png'  
  },
  {
    label: 'Science/Tech',
    value: 'sci/tech',
    icon_30: '/icons/technology-30-60/30.png',
    icon_60: '/icons/technology-30-60/60.png'  
  },
  {
    label: 'News',
    value: 'news',
    icon_30: '/icons/news-30-60/30.png',
    icon_60: '/icons/news-30-60/60.png'  
  },
  {
    label: 'Trending',
    value: 'trending',
    icon_30: '/icons/trends-30-60/30.png',
    icon_60: '/icons/trends-30-60/60.png'  
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
  }
]

function SideBar() {

  return (
    <div className='bg-white py-3' style={{height: 'calc(100vh - 60px)', width: '240px'}}>
      {
        menuItems.map((item, index) => (
          <div key={index} className='w-full flex justify-start items-center h-10 px-6 cursor-pointer group hover:bg-slate-100'>
            <img src={item.icon_30} className={'w-6 h-6 opacity-50 group-hover:opacity-100'} alt={item.label} />
            <span className={'ml-6 text-sm text-slate-700 font-light'}>{item.label}</span>
          </div>
        ))
      }
    </div>
  )
}

export default SideBar
