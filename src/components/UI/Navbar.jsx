import React, { Fragment } from 'react'
import '../../styles/UI/Navbar.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar() {
  const { isAuthenticated } = useSelector(state => state.auth)

  const authLinks = (
    <ul>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      
      <li>
        <Link to="/diagnose">Diagnose</Link>
      </li>      
    </ul>
  )


  const guestLinks = (
    <ul>      
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      
    </ul>
  )

  return (
    <div className='navbar'>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </div>
  )
}

export default Navbar