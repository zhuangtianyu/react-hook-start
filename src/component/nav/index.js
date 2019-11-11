import React from 'react'
import { NavLink } from "react-router-dom"

import './index.css'

const NavMap = [
  { to: '/', innerHTML: 'home' },
  { to: '/count', innerHTML: 'count' },
  { to: '/drink', innerHTML: 'drink' }
]

const NavLinkList = NavMap.map(item => {
  const { to, innerHTML } = item
  return (
    <NavLink
      className="nav-item"
      activeClassName="active"
      exact={ to === '/' }
      to={ to }
      key={ to }
    >
      { innerHTML }
    </NavLink>
  )
})

const Nav = () => (
  <div className="nav">
    { NavLinkList }
  </div>
)

export default Nav



