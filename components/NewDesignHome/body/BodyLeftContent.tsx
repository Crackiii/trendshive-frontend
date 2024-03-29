import React from 'react'

interface Props {
  children: React.ReactNode
}

function BodyLeftContent(props: Props) {
  return (
    <div className='p-5 pb-0'>
      {props.children}
    </div>
  )
}

export default BodyLeftContent