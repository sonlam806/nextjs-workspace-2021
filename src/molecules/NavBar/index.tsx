import { useTheme } from 'next-themes'
import NavLink from '../../atoms/NavLink/NavLink'

import { NAVLINKS } from '../../constant'

export default function NavBar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 flex items-center justify-between w-full">
      <div className="flex items-center justify-between nav-content">
        <div className="nav-logo dark:text-pink-900">Brand</div>
        <div>
          <ul>
            {NAVLINKS.map((link, index) => (
              <NavLink key={index + '/' + link} label={link} />
            ))}
            {/* change dark/light theme */}
            <li className="nav-link">
              <a
                href="#"
                id="change-theme"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 285.919 285.919"
                >
                  <path d="M142.959 0C64.131 0 0 64.132 0 142.96s64.131 142.959 142.959 142.959 142.96-64.131 142.96-142.959S221.787 0 142.959 0zm0 260.919V25c65.043 0 117.96 52.917 117.96 117.96 0 65.043-52.917 117.959-117.96 117.959z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

