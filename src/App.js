import MenuTable from './components/Menu/MenuTable'

import Home from './components/HomeLayout/Home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import MenuFilter from './components/Menu/MenuFilter'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<MenuTable />} />
        <Route path = '/one' element ={<MenuFilter/>} />
      </Routes>

    </>
  )
}

export default App
