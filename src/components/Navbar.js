import React from 'react'
import './components.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav className='topnav'>
          <Link to='/'>Home</Link>
      <Link to='/menu'>Menu</Link>
      <Link to='/one'>Filter</Link>
    </nav>
  )
}

export default Navbar


