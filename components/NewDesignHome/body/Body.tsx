import React from 'react'
import BodyLeftContent from './BodyLeftContent'
import BodyRightContent from './BodyRightContent'

function Body() {
  return (
    <div className='flex justify-start'>
      <div className='flex-1 overflow-y-scroll' style={{height: 'calc(100vh - 60px)', width: 'calc(100vw - 480px)', overflow: 'overlay'}}>
        <BodyLeftContent />
      </div>
      <div className='flex-2'  style={{height: 'calc(100vh - 60px)', width: '240px'}}>
        <BodyRightContent />
      </div>
    </div>
  )
}

export default Body