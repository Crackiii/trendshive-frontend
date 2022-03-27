import React from 'react'
import styles from './styles.module.css'

interface Props {
  html: string
  image: any
}

function HtmlPage({html,image}: Props) {
  return (
    <div 
      className={`text-lg font-light tracking-wide overflow-hidden ${Boolean(image) ? 'mt-8' : 'mt-5'} mt-10 ${styles.image}`} 
      dangerouslySetInnerHTML={{__html: html as string}}>
    </div>
  )
}

export default HtmlPage