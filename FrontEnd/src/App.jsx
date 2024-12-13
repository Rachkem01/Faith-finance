import React from 'react'
import Welcome from './pages/Welcome'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Sign from './pages/Sign'
import Landing from './pages/Landing'
const App = () => {
  return (
    <div>
    
<Routes>
<Route path='/' element={<Landing/>}></Route>
<Route path='/getstarted' element={<Welcome/>}></Route>
<Route path='/signup' element={<Login/>}></Route>
<Route path='/login' element={<Sign/>}></Route>
<Route path='/income' element={<Home/>}></Route>
</Routes>
    </div>
  )
}

export default App