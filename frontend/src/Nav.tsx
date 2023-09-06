import React from 'react'
import './Nav.css'
import { Link } from "react-router-dom";
import { useState } from 'react'
import walletIcon from './assets/walletIcon.png'; // Import the image
import Vector from './assets/Vector.png'; // Import the image
import burger from './assets/burger.png'; // Import the image

function Nav() {
    // const [ fix,setFix ] = useState(false)
    // function setFixed(){
    //   if (window.scrollY >= 392) {
    //     setFix(true)
    //   }else{
    //     setFix(false)
    //   }
    // }
    // window.addEventListener("scroll",setFixed)
  return (
    <nav className='navbar'>
        <div >
          <Link to='/home' className='burger' >
            <img  src={burger} alt="" />
          </Link>
        </div>
      
        <div className='walletNprofile'>
          <div className='wallet'>
            <Link to='/wallet' className='wallbox' >
              <h1 id='box' >$1000</h1>
              <img src={walletIcon} id='box' />
            </Link>
          </div >
          <div className='profile'>
            <a href='#' >Jenny Wilson</a>
            <img src={Vector} />
          </div>
        </div>
    </nav>
  )
}

export default Nav