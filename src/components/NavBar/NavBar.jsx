import React, { useState } from "react"
import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  
  return (
    
    <>

   <nav className="Navbar">
    
     <Link to="/">
      <span className="nav-logo">Ro.Less</span>
     </Link>
      <ul className={`nav-items ${isOpen && "open"}`}>

        <li className="category">
          <NavLink to="/category/set" className={({isActive}) => (isActive ? "active-link" : "")}>Sets</NavLink></li>
        
        
        <li className="category">
        <NavLink to="/category/calzas" className={({isActive}) => (isActive ? "active-link" : "")}>Calzas</NavLink></li>

        <li className="category">
        <NavLink to="/category/remeras" className={({isActive}) => (isActive ? "active-link" : "")}>Remeras</NavLink></li>

        <li className="category">
        <NavLink to="/category/medias"className={({isActive}) => (isActive ? "active-link" : "")} >Medias</NavLink></li>

                   
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
