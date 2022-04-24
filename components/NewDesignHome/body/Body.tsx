import React, { useEffect, useMemo, useState } from 'react'
import BodyLeftContent from './BodyLeftContent'
import BodyRightContent from './BodyRightContent'
import { usePageContext } from '../PageContext';
import { useWindowSize } from 'react-use';
import HomeFooter from '../../shared/HomeFooter';

interface Props {
  left: JSX.Element
  right: JSX.Element
}

function Body(props: Props) {
  const { toggleNavBar } = usePageContext()
  const { width } = useWindowSize();
  const [initialWidth, setInitialWidth] = useState('100vw');

  //@TODO - prevent double rendering
  const calculatedWidth = useMemo(()=> {
    let initialWidth = '100vw';

    if(width > 1350) {
      initialWidth = `calc(100vw - ${toggleNavBar ? '310px' : '480px'})`
    }
  
    if(width < 1350 && width > 1024) {
      initialWidth = `calc(100vw - ${toggleNavBar ? '70px' : '240px'})`
    }
  
    if(width < 1024) {
      initialWidth = `100vw`
    }

    return initialWidth

  }, [width, toggleNavBar])


  useEffect(() => {
    setInitialWidth(calculatedWidth)
  }, [calculatedWidth])

  return (
    <div className='flex justify-start'>
      <div className='flex-1' >
        <div style={{height: 'calc(100vh - 60px)', width: initialWidth }} className='overflow-y-auto' >
          <BodyLeftContent>
            {props.left}
          </BodyLeftContent>
          <HomeFooter />
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