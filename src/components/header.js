import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  // gets page title for headline link

  return (
    <header className={headerStyles.header}>
      <nav>
        <ul className="navList">
          <li>
            <Link className="navItem" activeClassName="activeNavItem" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link
              className="navItem"
              activeClassName="activeNavItem"
              to="/skills"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className="navItem"
              activeClassName="activeNavItem"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="navItem"
              activeClassName="activeNavItem"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
