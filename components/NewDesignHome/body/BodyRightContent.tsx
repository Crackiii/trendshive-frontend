import React from 'react'

interface Props {
  children: JSX.Element
}
function BodyRightContent(props: Props) {
  return (
    <div className='p-4'>
      {props.children}
    </div>
  )
}

export default BodyRightContent