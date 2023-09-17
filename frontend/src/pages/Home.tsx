import React from 'react'
import Nav from '../Nav'
import { Link } from "react-router-dom";
import './Home.css'

const Home = () => {
  return (
    
    <div className='home-bg'>
        
        <Link className="home-btn" to='/' >
            <button>home</button>
        </Link>

        <Link className="home-btn" to='/payment' >
            <button>payment</button>
        </Link>
     </div>
  )
}

export default Home