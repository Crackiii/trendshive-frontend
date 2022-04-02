/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { createRef, useEffect, useState } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import { useQuery } from 'react-query'
import { useDebounce } from 'react-use'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SearchItem from './SearchItem'

const useSearch = (query: string) => {
  const {isLoading, data} = useQuery(['SEARCH_RESULTS', query], () => {
    return fetch(`https://trendscads-backend.herokuapp.com/search?searchQuery=${query}&limit=20&offset=0`, {method: 'GET'}).then(res => res.json())
  }, {refetchOnWindowFocus: false, enabled: Boolean(query?.length), retry: false})

  return {isLoading, data}
}

function TopBar() {
  const params = useRouter()
  const [value, setValue] = useState('')
  const [debouncedValue, setDebouncedValue] = useState('')
  const [showDropDown, setShowDropDown] = useState(false)
  const {isLoading, data} = useSearch(debouncedValue)
  const inputRef = createRef()

  useDebounce(() =>  setDebouncedValue(value), 500, [value]);

  useEffect(() => {
    setValue(params?.query['searchQuery'] as string)
  }, [params?.query])

  useEffect(() => {
    document.addEventListener('click', (ev) => {
      if(ev.target !== inputRef.current) {
        setShowDropDown(false)
      } else {
        setShowDropDown(true)
      }
    })
  }, [inputRef])

  const results = isLoading ? [{} as any, {} as any, {} as any, {} as any] : data?.results

  return (
    <div className={`flex flex-row justify-start h-16 bg-white relative shadow-sm`}>
      <div className={`text-lg w-10 flex flex-col justify-center items-center min-h-full px-6 sm:px-14`}>
        <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden'>
          <Link href={'/'} passHref>
            <span>
              <a><img src='/logo.jpeg' alt='logo' className='object-cover w-full min-w-full h-full min-h-full'/></a>
            </span>
          </Link>
        </div>
      </div>
      <div className='w-full py-3 sm:py-2 px-0 sm:px-30 md:px-0 lg:px-32 xl:px-18 2xl:w-2/4 2xl:m-auto relative'>
        <form onSubmit={(e) => {
          e.preventDefault()
          params.push({
            pathname: '/search',
            query: {
              searchQuery: value,
              limit: 20,
              offset: 0
            },
          })
          setShowDropDown(false)
        }}>
          <input 
            type='text' 
            ref={inputRef as React.LegacyRef<HTMLInputElement>} 
            onChange={(ev) => {
              setValue(ev.target.value)
              if(value?.length > 0) setShowDropDown(true)
            }} 
            value={value || ''}
            placeholder={'Try searching anything...'} 
            className='focus:shadow-xl h-10 sm:h-12 border focus:border-blue-400 bg-slate-100 w-full p-4 font-light outline-none rounded-md text-base'
          />
        </form>
        {
          showDropDown && 
          <div className='block relative z-30 bg-white rounded-b-2xl overflow-hidden pr-1 shadow-2xl'>
            <div className='block rounded-2xl'>
              <div className='text-xs uppercase block pt-4 px-5 font-medium text-slate-400 tracking-wider'>
                {
                  Boolean(value?.length) ?
                  <>Query - <b className='text-slate-700'>{value}</b></>: 
                  <>Type something...</>
                }
              </div>
              <div className='px-5 relative h-96 overflow-y-auto'>
                {
                  results?.map((item: any, index:number) => (
                    <SearchItem item={item} key={index} isLoading={isLoading} />
                  ))
                }
                {
                 !isLoading && !Boolean(results?.length) && 
                 <div className=' w-full h-96 flex flex-col justify-center items-center'>
                   <div className=' w-40 h-auto'>
                    <img src='/no-results.svg' alt='no-results' className='object-cover min-w-full'/>
                   </div>
                   <div className='mt-5 text-xl font-light text-slate-300 uppercase'>No results</div>
                 </div>
                }
              </div>
            </div>
          </div>
        }
      </div>
      <div className='flex flex-col justify-center items-end px-1 sm:px-14'></div>
    </div>
  )
}

export default TopBar