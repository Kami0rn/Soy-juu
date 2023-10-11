import './OrderHistory.css';
import OrderHistoryBar from './OrderHistoryBar';

function OrderHistory() {
    return (
        <div className="App">
            <div className='NavBar'>
                <h1 className='NavBarHeader'>SoyJuu's History</h1>
                <img src="/deliveryImages/menu_icon.png" alt="menuIcon" className='menuIcon' />
            </div>

            <div className='historyWindow'>
                <OrderHistoryBar title='นาย1' thumbnailUrl='deliveryImages/meat_01.jpg'/>
                <OrderHistoryBar title='นาย2' thumbnailUrl='deliveryImages/meat_02.jpg'/>
            </div>
        </div>
    )
}

export default OrderHistory;