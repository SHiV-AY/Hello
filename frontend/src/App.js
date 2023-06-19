import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import React from 'react'
import Home from './Components/Home';
import SignUp from './Components/Signup';
import Header from './Components/Navbar'
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login'
const App = () => {
  return (
    <>

      <BrowserRouter>
        <div>
          <div>  <Header />
          </div>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/login' element={<Login />} />


          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}
export default App;