import React from 'react'
import '../styles/Pages/Dashboard.css'
import { logoutUser } from '../slices/authSlice'
import { useDispatch } from 'react-redux'

function Dashboard() {
    const dispatch = useDispatch()
    
    const logout = () => {
        dispatch(logoutUser())
    }
  
  return (
    <div className='dashboard-container'>
        <h1>Dashboard</h1>
        <form>
            <label htmlFor="">Symptoms</label>
            <select name="" id="" multiple>
                <option value=""></option>
            </select>
        </form>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard