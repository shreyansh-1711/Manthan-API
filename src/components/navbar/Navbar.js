import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
export const Navbar = () => {
  return (
    <header className='navbar'>
        <div className='navbar_title navbar_item'> <Link to="/home" style={{fontSize:
        "40px",marginRight:"500px"}}>Home</Link> </div>
        <div className='navbar__item'><Link to="/form" style={{fontSize:
        "40px"}}>FORM</Link></div>
        
    </header>
  )
}
