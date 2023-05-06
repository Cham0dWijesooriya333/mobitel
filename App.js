import React from 'react'
import Signup from './signup'
import Login from './login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home'
import Menu from './menu'



const App = () => {

  <Menu/>
  return (
    

  <BrowserRouter>
     
     <Routes>
        
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/home' element={<Home/>} />
        

     </Routes>

  </BrowserRouter>
      

  )
}

export default App;
