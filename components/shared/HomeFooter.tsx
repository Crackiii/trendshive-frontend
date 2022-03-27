import Link from 'next/link'
import React from 'react'

function HomeFooter() {
  return (
    <div className='h-16 bg-slate-900 mt-16 text-white flex flex-row justify-center items-center'>
      <div>
      © 2022 Trendscads
      </div>
      <div>
        <Link href='/privacy-policy'>
          <a className='ml-3'>Privacy policy</a>
        </Link>
      </div>
    </div>
  )
}

export default HomeFooter