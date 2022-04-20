import React from 'react'
import BodyLeftContent from './BodyLeftContent'
import BodyRightContent from './BodyRightContent'
// import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { usePageContext } from '../PageContext';

interface Props {
  left: JSX.Element
  right: JSX.Element
}

function Body(props: Props) {

  const {toggleNavBar} = usePageContext()

  return (
    <div className='flex justify-start'>
      <div className='flex-1' >
        <div style={{height: 'calc(100vh - 60px)', width: `calc(100vw - ${toggleNavBar ? '310px' : '480px'})`}} className='overflow-y-auto' >
          <BodyLeftContent>
            {props.left}
          </BodyLeftContent>
        </div>
      </div>
      <div className='flex-2' style={{height: 'calc(100vh - 60px)', width: '240px'}} >
        <BodyRightContent>
          {props.right}
        </BodyRightContent>
      </div>
    </div>
  )
}

export default Body