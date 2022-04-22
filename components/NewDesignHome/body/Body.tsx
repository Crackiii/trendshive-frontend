import React, { useEffect, useMemo } from 'react'
import BodyLeftContent from './BodyLeftContent'
import BodyRightContent from './BodyRightContent'
import { usePageContext } from '../PageContext';
import { useWindowSize } from 'react-use';

interface Props {
  left: JSX.Element
  right: JSX.Element
}

function Body(props: Props) {
  const { width } = useWindowSize();
  const { toggleNavBar } = usePageContext()

  const bodyWidth = useEffect(() => {
    let initialWidth = 480
    if(width > 1350) {
      initialWidth = 480
      if(toggleNavBar) {
        initialWidth = initialWidth - 170
      }
    }
  
    if(width < 1350) {
      initialWidth = (240)
      if(toggleNavBar) {
        initialWidth = initialWidth - 170
      }
    }
  
    if(width < 1024) {
      initialWidth = (0)
    }
  }, [width])
  
  
  return (
    <div className='flex justify-start'>
      <div className='flex-1' >
        <div style={{height: 'calc(100vh - 60px)', width: `calc(100vw - ${bodyWidth}px)`}} className='overflow-y-auto' >
          <BodyLeftContent>
            {props.left}
          </BodyLeftContent>
        </div>
      </div>
      {
        width > 1350 && 
        <div className='flex-2 border w-60 overflow-hidden overflow-y-auto' style={{height: 'calc(100vh - 60px)'}} >
          <BodyRightContent>
            {props.right}
          </BodyRightContent>
        </div>
      }
    </div>
  )
}

export default Body