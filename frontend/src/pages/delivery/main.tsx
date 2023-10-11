import './main.css';
import OrderBar from './components/OrderBar';
import OrderDetail from './components/OrderDetail';
import orderBarID from './data/OrderBarID';
import React, {useState} from 'react';
import OrderDetailBar from './components/OrderDetailBar';
import OrderDetailBarID from './data/OrderDetailBarID';


function App() {

  const OrderBaridElements = orderBarID.map(({...orderBarID }, index) => {
    return <OrderBar key={index} {...orderBarID} />
  });


  return (
    <div className='App'>
      <div className='NavBar'>
        <h1 className='NavBarHeader'>SoyJuu's Order</h1>
        <img src='deliveryImages/menu_icon.png' alt="menuIcon" className='menuIcon' />
      </div>

      <div className='grid'>
        <div className='orderWindow'>
          <OrderBar {...orderBarID[0]}/>
          <OrderBar {...orderBarID[1]}/>
          <OrderBar {...orderBarID[2]}/>
        </div>
        <div className='orderDetailWindow'>

          <OrderDetail/>
        </div>
      </div>
    </div>
  )
}

export default App;