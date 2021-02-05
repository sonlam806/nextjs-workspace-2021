import React from 'react'
import Link from 'next/link'

interface INavLink {
  label: string
}

export default function NavLink({ label }: INavLink) {
  return (
    <Link href={`/${label}`}>
      <a className="nav-link">label</a>
    </Link>
  )
}
