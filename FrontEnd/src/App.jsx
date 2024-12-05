import React from 'react'
import Welcome from './pages/Welcome'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
const App = () => {
  return (
    <div>
<Routes>
<Route path='/' element={<Welcome/>}></Route>
<Route path='/home' element={<Home/>}></Route>
</Routes>
    </div>
  )
}

export default App