import React from 'react'
import Link from 'next/link'

interface INavLink {
  label: string
}

export default function NavLink({ label }: INavLink) {
  return (
    <Link href={`/${label}`}>
      <li className="nav-link">
        <a>{label}</a>
      </li>
    </Link>
  )
}
