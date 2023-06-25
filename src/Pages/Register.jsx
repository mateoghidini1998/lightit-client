import React from 'react'
import RegisterForm from '../components/Auth/RegisterForm'
import '../styles/Pages/Auth.css'

function Register() {
  return (
    <div className='auth-container'>
        <h1>Sign <span>Up</span></h1>
        <RegisterForm/>
    </div>
  )
}

export default Register