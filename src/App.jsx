import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import { BrowserRouter , Route ,Router, Routes } from 'react-router-dom'
import About from './Pages/About'
import Volunteer from './Pages/Volunteer'
const App = () => {
  return (
    <div>
      <BrowserRouter>
  
<Navbar/>
    <Routes>
 <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
    <Route path='/volunteer' element={<Volunteer/>}/>
</Routes>
<Footer/>
</BrowserRouter>
    </div>
  )
}

export default App