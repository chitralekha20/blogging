import React from 'react'
import "./header.css"
import { NavLink } from 'react-router-dom'

const Header = ({heads}) => {
  return (
    <div className='headerContainer'>
      <div>
        <div>Logo</div>
      </div>
      <div className='headerRight'>
        <NavLink to="/" className='headerText'>Home</NavLink>
        <NavLink to="/profile" className='headerText'>Profile</NavLink>
      </div>
    </div>
  )
}

export default Header