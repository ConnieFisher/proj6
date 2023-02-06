import Content from './components/Content'
import './index.css'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import Test from './components/Test'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Content />} />
        <Route path = '/test' element ={<Test/>} />
      </Routes>

    </>
  )
}

export default App
