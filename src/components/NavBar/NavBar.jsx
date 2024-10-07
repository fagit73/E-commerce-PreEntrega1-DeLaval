import React, { useState } from "react"
import CartWidget from "./CartWidget"
import "./Navbar.css"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  
  return (
    
    <>

   <nav className="Navbar">
    

      <span className="nav-logo">Ro.Less</span>
      <ul className={`nav-items ${isOpen && "open"}`}>
        <li>Calzas</li>
        <li>Shorts</li>
        <li>Set</li>
        <li>Remeras</li>
        <li>Medias</li>
        
        
      </ul>
      <div className="cartwidget"><CartWidget/> </div>


      


      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
      </nav>

      </>   

    
  )
}

export default NavBar
