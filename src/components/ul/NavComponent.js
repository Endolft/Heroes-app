import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavComponent = ({route,name}) => {
    
  return (
  <NavLink
    className={({ isActive }) =>
      "nav-item nav-link " + (isActive ? "active" : "")
    }
    to={route}
  >
    {name}
  </NavLink>
  
  )
}
