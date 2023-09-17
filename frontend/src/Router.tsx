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


const router = createBrowserRouter([
  
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