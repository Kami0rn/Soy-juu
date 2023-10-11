import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Wallet from './pages/payment/Wallet';
import Payment from './pages/Payment';
import Home from './pages/Home';
import Delivery from './pages/delivery/main';
import ShowOrder from './pages/delivery/ShowOrder';
import OrderHistory from './pages/delivery/OrderHistory';


const router = createBrowserRouter([
  
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/payment/wallet",
    element:<Wallet />
  },
  {
    path:"/payment",
    element:<Payment />
  },
  {
    path:"/wallet/topUp",
    element:<Payment />
  },
  {
    path:"/delivery",
    element:<Delivery />
  },
  {
    path:"/delivery/showorder",
    element:<ShowOrder />
  },
  {
    path:"/delivery/orderhistory",
    element:<OrderHistory />
  }
 
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();