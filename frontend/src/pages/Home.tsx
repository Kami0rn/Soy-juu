import React from 'react'
import Nav from '../Nav'
import { Link } from "react-router-dom";
import './Home.css'

const Home = () => {
  return (
    
    <div>
        
        <Link id="btn" to='/' >
            <button>home</button>
        </Link>

        <Link id="btn" to='/payment' >
            <button>payment</button>
        </Link>
     </div>
  )
}

export default Home