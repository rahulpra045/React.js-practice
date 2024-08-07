import React, { useState } from 'react'
import './styles/18_NavBar.css'
import { CiMenuFries } from "react-icons/ci";
const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

  return (
      <div className="navbar">
          <button className='menu-icon' onClick={toggleMenu}>
              <CiMenuFries/>
          </button>
          <ul className={`menu ${isOpen ? 'open':''}`}>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contacts</li>
          </ul>
    </div>
  )
}

export default NavBar