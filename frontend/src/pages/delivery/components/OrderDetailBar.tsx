import { Component } from 'react';
import './OrderDetailBar.css';

interface OrderDetailBarProps {
    title: string;
    thumbnailUrl: string;
}

const OrderDetailBar = ({title, thumbnailUrl}: OrderDetailBarProps) => {
    
    return(
        <div>
            
        <div className="OrderDetailBar" >
            <div className="OrderDetailImages">
                <img src={thumbnailUrl} alt="OrderDetailImages" />
            </div>
            <div className="OrderDetailText">
                {title}
            </div>
        </div>

        </div>
    )
}

export default OrderDetailBar;