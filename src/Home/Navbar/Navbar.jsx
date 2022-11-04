import React from 'react'
import Logo from '../../img/logo.png'
import NavLink from './NavLinks/NavLink'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='NavBar'>
    <div className='Logo'>
      <img src={Logo} alt='logo' style={{height:'125px'}}/>
    </div>
    <NavLink/>
    </div>
  )
}

export default Navbar