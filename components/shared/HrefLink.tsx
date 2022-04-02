import Link, { LinkProps } from 'next/link'
import React from 'react'

type ATypes = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
type LTypes = LinkProps

interface Props{
  children: React.ReactNode
}

function HrefLink(props: ATypes & LTypes) {
  return (
    <Link {...props}>
      <span>
        <a {...props}>
          {props.children}
        </a>
      </span>
    </Link>
  )
}

export default HrefLink