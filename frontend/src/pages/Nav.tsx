import React from 'react'
import '../App.css'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>  
        <div>
          <Link to='/home' >burger</Link>
          <img src="#" alt="" />
        </div>
        <div>
          <Link to='/wallet' >$1000</Link>
          <img src='#' />
        </div>
        <div>
          <a href='#' >name</a>
          <img src='#' />
        </div>
    </nav>
  )
}

export default Nav