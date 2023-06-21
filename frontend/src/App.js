import { Route, BrowserRouter, Routes } from 'react-router-dom';
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
        <div style={{backgroundImage:'url("https://wallpaperaccess.com/full/1655659.jpg")',backgroundRepeat: 'no-repeat',backgroundSize:"cover",height:"100vh"
}}>
          <Header />
          

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