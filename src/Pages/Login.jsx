import React from 'react'
import '../styles/Pages/Auth.css'
import LoginForm from '../components/Auth/LoginForm'

function Login() {
  return (
    <div className='auth-container'>
        <LoginForm/>
    </div>
  )
}

export default Login