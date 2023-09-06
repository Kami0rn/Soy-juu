import React from 'react'
import Nav from '../Nav'
import './Payment.css'
import pod from '../assets/pod.png'; // Import the image
import debit from '../assets/debit.png'; // Import the image
import bank from '../assets/bank.png'; // Import the image


function Payment() {
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@500&family=PT+Sans&display=swap');
      </style>
    

    <div className='bgn'>
        <Nav />
        <section className='bg'>
          <div className='pMethod'>
            <h1>
              Select payment method
            </h1>
            <hr />
            <div className='gbtn'>
              <div className='topbtn'>
                  <button id='btn' className='debit'>
                    Credit / Debit Card
                    <img src={bank} alt="" />
                  </button>
                  <button id='btn' className='bank'>
                    Banktranfer
                    <img src={debit} alt="" /> 
                  </button>
                  <button id='btn' className='pod'>
                    Pay at delivery  
                    <img src={pod} alt="" /> 
                  </button>
              </div>
            </div>
          </div>
          <div className='detail'>
            <div className='address'>
              <h1>
                Name-Address
              </h1>
              <hr />
              <h4>
              Jenny Wilson 
              </h4>
              <h4>
              3517 W. Gray St. Utica, Pennsylvania 57867
              </h4>
              
            </div>
            <div className='bill'>
              <h1>
                Billing
              </h1>
              <hr />
              {/* <ul>
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                    ))} 
              </ul> */}
              <ul>
                <li>1 x Menu 1</li>
                <li>1 x Menu 3</li>
                <li>3 x Drink 1</li>
                <li>1 x Drink 1</li>
              </ul>
              <h2>
                Totals : $14.81
              </h2>
              

            </div>

          </div>
          <footer>

          </footer>
        </section>
        
    </div>
    
    
    </>
  )
}

export default Payment