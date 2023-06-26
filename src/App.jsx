import './App.css';
import Home from './components/UI/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/UI/Navbar';
import Footer from './components/UI/Footer';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Dashboard from './Pages/Dashboard';
import PrivateRoute from './components/Routing/PrivateRoute';
import useAuth from './customHooks/useAuth';

function App() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <h1 className='title loader'>Loading...</h1>;
  }

  return (
    <>
      <div className='content-container'>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path='/register' element={<Register />} />
          <Route path="/" element={isAuthenticated ? <Dashboard /> : <Home />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
