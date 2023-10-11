import ShowOrder from '../ShowOrder';
import OrderDetailBarID from '../data/OrderDetailBarID';
import ids from '../data/OrderDetailBarID';
import './OrderDetail.css';
import OrderDetailBar from './OrderDetailBar';



const OrderDetail = () => {

    const OrderDetailBarIDElements = OrderDetailBarID.map(({...OrderDetailBarID},index) =>{
        return <OrderDetailBar key={index} {...OrderDetailBarID}/>
    });

    return (
        <div className="OrderDetail" >
            {OrderDetailBarIDElements}
            <button className='AcceptButton'>Accept</button>
        </div>
    );
}

export default OrderDetail;