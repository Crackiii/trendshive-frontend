import React from 'react'
import Body from './body/Body'
import NavBar from './NavBar'
import SideBar from './SideBar'

interface Props {
  left: JSX.Element
  right: JSX.Element
}

function Page(props: Props) {

  return (
    <>
      <NavBar />
      <div className='flex justify-start'>
        <SideBar />
        <Body left={props.left} right={props.right} />
      </div>
    </>
  )
}

export default Page