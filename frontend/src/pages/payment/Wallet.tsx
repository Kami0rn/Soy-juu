
import React from 'react'
import Nav from '../../Nav'
import { Link } from "react-router-dom";
import './Wallet.css'



function Wallet() {
  return (
    <>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@500&family=PT+Sans&display=swap');
    </style>
    
    <Nav /> 
        <div>
        <Link to={'/wallet/topUp'} className='topUpBtn'>
          เติมเงิน
        </Link>
        </div>
        <div>Wallet</div>
        <a href="/payment"><div>GG</div></a>
    </>
  )
}

export default Wallet
