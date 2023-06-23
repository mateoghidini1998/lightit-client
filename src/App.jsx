import './App.css'
import Home from './components/UI/Home'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from './components/UI/Navbar'
import Footer from './components/UI/Footer'
import Register from './components/Pages/Register'



function App() {

  const { isAuthenticated } = useSelector(state => state.auth)

  return (
    <>
    <div className='content-container'>
    <Navbar/>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path="/" element={<Home/>} />
      </Routes>
    <Footer/>
    </div>
    </>
  )
}

export default App
