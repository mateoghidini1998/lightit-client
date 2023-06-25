import React, { Fragment } from 'react'
import '../../styles/UI/Navbar.css'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../slices/authSlice'
import { Link } from 'react-router-dom'
import { GrLogout } from 'react-icons/gr'

function Navbar() {
  const { isAuthenticated } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  
  const logout = () => {
    dispatch(logoutUser());
  };

  const authLinks = (
    <ul>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      
      <li>
        <Link to="/diagnose">Diagnose</Link>
      </li>      
    <li className='logout'>
    <i><GrLogout/></i>
    <button onClick={logout}>Logout</button>
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