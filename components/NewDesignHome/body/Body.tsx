import React from 'react'
import BodyLeftContent from './BodyLeftContent'
import BodyRightContent from './BodyRightContent'
import { usePageContext } from '../PageContext';
import { useWindowSize } from 'react-use';

interface Props {
  left: JSX.Element
  right: JSX.Element
}

export const useBodyWidth = () => {
  const { width } = useWindowSize();
  const { toggleNavBar } = usePageContext()
  let initialWidth = 480;

  if(width > 1350) {
    initialWidth = 480
    if(toggleNavBar) {
      initialWidth = initialWidth - 170
    }
  }

  if(width < 1350) {
    initialWidth = 240;
    if(toggleNavBar) {
      initialWidth = initialWidth - 170
    }
  }

  if(width < 1024) {
    console.log("CALLED")
    initialWidth = 0;
  }

  return `calc(100vw - ${initialWidth}px)`
}

function Body(props: Props) {
  const { width: windowWidth } = useWindowSize();
  const width = useBodyWidth()
  
  return (
    <div className='flex justify-start'>
      <div className='flex-1' >
        <div style={{height: 'calc(100vh - 60px)', width}} className='overflow-y-auto' >
          <BodyLeftContent>
            {props.left}
          </BodyLeftContent>
        </div>
      </div>
      {
        windowWidth > 1350 && 
        <div className='flex-2 border border-red-400 w-60' style={{height: 'calc(100vh - 60px)'}} >
          <BodyRightContent>
            {props.right}
          </BodyRightContent>
        </div>
      }
    </div>
  )
}

export default Body