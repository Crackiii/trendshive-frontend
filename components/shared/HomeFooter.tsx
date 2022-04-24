import Link from 'next/link'
import React from 'react'

function HomeFooter() {
  return (
    <div className='h-14 bg-slate-900 mt-16 text-white flex flex-row justify-center items-center '>
      <div>
        <Link href='/privacy-policy' passHref>
          <span className='cursor-pointer text-slate-400 hover:text-white'>
            <a className='ml-3'>Privacy policy</a>
          </span>
        </Link>
        <Link href='/cookie-policy' passHref>
          <span className='cursor-pointer text-slate-400 hover:text-white'>
            <a className='ml-3'>Cookie policy</a>
          </span>
        </Link>
      </div>
      <div className='ml-3 text-slate-400'>
        © 2022 Trendscads
      </div>
    </div>
  )
}

export default HomeFooter