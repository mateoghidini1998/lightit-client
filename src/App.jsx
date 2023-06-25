import './App.css'
import Home from './components/UI/Home'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from './components/UI/Navbar'
import Footer from './components/UI/Footer'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Dashboard from './Pages/Dashboard'



function App() {

  const { isAuthenticated } = useSelector(state => state.auth)

  return (
    <>
    <div className='content-container'>
    <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/" element={isAuthenticated ? <Dashboard/> : <Home/>} />
      </Routes>
    <Footer/>
    </div>
    </>
  )
}

export default App
