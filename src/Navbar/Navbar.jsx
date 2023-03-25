import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
  <nav className="navbar navbar-expand-md py-3 fixed-top">
  <div className="container">
    <Link className="navbar-brand text-white" to=""><i className="fa-solid fa-hands-holding-circle fs-1"></i></Link>
    <button className="navbar-toggler text-white fs-6 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      MENU <i className="fa-solid fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <NavLink className={({isActive})=>isActive==true? 'nav-link test' : 'nav-link' } to="protfolio">PROTFOLIO</NavLink>
        </li>
        <li className="nav-item mx-2">
          <NavLink className={({isActive})=>isActive==true? 'nav-link test' : 'nav-link' } to="about">ABOUT</NavLink>
        </li>
        <li className="nav-item ms-2">
          <NavLink className={({isActive})=>isActive==true? 'nav-link test' : 'nav-link' } to="contact">CONTACT</NavLink>
        </li>
        </ul>
    </div>
  </div>
</nav>
  )
}
