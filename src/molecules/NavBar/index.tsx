import React from 'react'
import NavLink from '../../atoms/NavLink/NavLink'

import { NAVLINKS } from '../../constant'

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 flex items-center justify-between w-2/3">
      <div>Brand</div>
      <div>
        <ul>
          {NAVLINKS.map((link, index) => (
            <NavLink key={index + '/' + link} label={link} />
          ))}
        </ul>
      </div>
    </nav>
  )
}
