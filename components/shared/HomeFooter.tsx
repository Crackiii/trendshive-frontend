import Link from 'next/link'
import React from 'react'

function HomeFooter() {
  return (
    <div className='h-16 bg-slate-900 mt-16 text-white flex flex-row justify-center items-center'>
      <div>
        <Link href='/privacy-policy' passHref>
          <span>
            <a className='ml-3'>Privacy policy</a>
          </span>
        </Link>
        <Link href='/cookie-policy' passHref>
          <span>
            <a className='ml-3'>Cookie policy</a>
          </span>
        </Link>
      </div>
      <div className='ml-3'>
        © 2022 Trendscads
      </div>
    </div>
  )
}

export default HomeFooter