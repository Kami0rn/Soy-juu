import './main.css';
import OrderBar from './components/OrderBar';
import OrderWindow from './components/OrderWindow';
import Nav from '../../Nav';

function App() {

  return (
    <div className='App'>

      <div className='header'>
        {/* <h1 style={{ color: 'white' }}>SoyJuu's Orders</h1> */}
        {/* <img className='menu' src='SoyJuImages/menu_icon.png' alt="menu_icon"></img> */}
        <Nav />
      </div>

      <div className='order-background'>
        <OrderBar />
        <OrderBar />
        <OrderBar />
        <OrderBar />

        <OrderWindow />

        
      </div>

      

    </div>
  )
}

export default App;