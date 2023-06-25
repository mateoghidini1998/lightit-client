import React from 'react'
import '../styles/Pages/Auth.css'
import LoginForm from '../components/Auth/LoginForm'

function Login() {
  return (
    <div className='auth-container'>
        <h1>Sign <span>In</span></h1>
        <LoginForm/>
    </div>
  )
}

export default Login