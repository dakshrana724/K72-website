// import { useState } from 'react'
import Home from './components/Home'
import { Route,Routes } from 'react-router-dom'
import Agence from './components/Agence'
import Projects from './components/Projects'

import './App.css'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'
import Contact from './components/Contact'



function App() {
  // const [count, setCount] = useState(0)
  

  return (
    <>
    <div className="overflow-x-hidden">
      <Navbar />
      <FullScreenNav />
      
      
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/agence' element={<Agence/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contacts' element={<Contact/>}/>
      </Routes>

      
    </div>
        
    </>
  )
}

export default App
