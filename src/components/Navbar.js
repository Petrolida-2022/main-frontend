import React, { useState } from 'react'
import '../assets/css/main.scss'
import 'animate.css'

import logo from '../assets/img/home/logo-petrolida-desktop.svg'
import hamb from "../assets/img/home/hamb-nav.svg"
import exit from "../assets/img/home/exit-nav.svg"

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false)
  const [navbarImg, setNavbarImg] = useState(true)

  const handleResponsive = () => {
    setToggleNavbar(!toggleNavbar)
    setNavbarImg(!navbarImg)
  }

  return (
    <nav>
      <div className="container d-flex align-items-center justify-content-between">
        <a href="/" id="logo-petrolida">
          <img src={logo} alt="Logo Petrolida" />
        </a>
        <ul className={`d-flex animate__animated ${toggleNavbar && 'responsive animate__slideInLeft'}`} id="list-link-nav">
          <li><a href="">About</a></li>
          <li><a href="">Events</a></li>
          <li><a href="">FAQ</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="" className="sign-in">Sign in</a></li>
        </ul>
        <button className="d-block d-md-none btn shadow-none" id="btn-nav" onClick={handleResponsive}><img src={navbarImg ? hamb : exit} alt="Button Navigation" id="img-btn-nav"/></button>
      </div>
    </nav>
  )
}

export default Navbar