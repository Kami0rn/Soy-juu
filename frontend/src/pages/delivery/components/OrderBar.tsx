import React, {useState} from 'react';
import './OrderBar.css';

interface OrderBarProps {
  title: string;

};

const OrderBar = ({title}: OrderBarProps) => {


  return (
    <div className='OrderBar'>
      <div className='customerAddress'>
        {title}
      </div>
    </div>
  )
}

export default OrderBar;