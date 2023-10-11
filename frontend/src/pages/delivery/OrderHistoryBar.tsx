import './OrderHistoryBar.css';

const OrderHistoryBar = ({title,thumbnailUrl}:{title:string, thumbnailUrl:string}) => {
    return(
        <div className="OrderHistoryBar">
            <div className='customerProfile'>
                <img src={thumbnailUrl} alt="customerProfile" />
            </div>
            <div className='orderHistoryDetail'>{title}</div>
        </div>
    )
}

export default OrderHistoryBar;