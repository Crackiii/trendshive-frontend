/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react'
import { gridItems } from './data'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function TopBar() {

  const [value, setValue] = useState('')

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [value])

  return (
    <div className={`flex flex-row justify-start h-16 bg-white relative shadow-sm`}>
      <div className={`text-lg w-10 flex flex-col justify-center items-center min-h-full px-6 sm:px-14`}>
        <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden'>
          <img src='/logo.jpeg' alt='logo' className='object-cover w-full min-w-full h-full min-h-full'/>
        </div>
      </div>
      <div className='w-full py-3 sm:py-2 px-0 sm:px-30 md:px-0 lg:px-32 xl:px-18 2xl:w-2/4 2xl:m-auto relative'>
        <input type='text' onChange={(ev) => {
          setValue(ev.target.value)
          setIsLoading(true)
        }} placeholder={'Try searching anything...'} className='focus:shadow-xl h-10 sm:h-12 border focus:border-blue-400 bg-slate-100 w-full p-4 font-light outline-none rounded-md text-base'/>
        {
          value.length > 0 && 
          <div className='block  relative z-30 bg-white rounded-b-2xl overflow-hidden pr-1 shadow-2xl'>
            <div className='block rounded-2xl'>
              <div className='px-5 relative h-96  overflow-y-auto'>
                {
                  (isLoading ? [{} as any, {} as any, {} as any, {} as any] : gridItems).map((item, index) => (
                  <div className='grid grid-rows-1 gap-0 grid-cols-12 border-b border-slate-100 py-4 relative' key={index}>
                    <div className={`row-start-1 col-start-1 col-span-2 md:col-span-1 h-14 w-14 flex flex-col rounded-2xl overflow-hidden relative ${!isLoading && 'shadow-lg shadow-slate-400'}`}>
                      {
                        isLoading ? <Skeleton height={'3.7rem'} width={'3.5rem'} style={{display: 'inline-block'}} /> : <img className='object-cover min-w-full min-h-full' src={item.image} alt='' />
                      }
                    </div>
                    <div className='row-start-1 col-start-3 md:col-start-2 col-span-10 md:col-span-11 flex flex-col flex-2 justify-center pl-5'>
                        <div className='text-md font-base text-slate-700 min-w-full'>
                         {isLoading ? <Skeleton height={'1.3rem'} /> : item.title} 
                        </div>
                        <div className='text-sm font-light text-slate-400 mt-1 tracking-wide min-w-full whitespace-nowrap overflow-hidden text-ellipsis'>
                          {isLoading ? <Skeleton height={'.8rem'} className='mt-2' /> :item.desc}
                        </div>
                    </div>
                </div>
                  ))
                }
                
              </div>
            </div>
          </div>
        }
      </div>
      <div className='flex flex-col justify-center items-end px-6 sm:px-14'></div>
    </div>
  )
}

export default TopBar