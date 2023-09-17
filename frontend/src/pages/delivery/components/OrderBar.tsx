import meat_01 from "./orderImages/meat_01.jpg"

function OrderBar() {
    return(
        <div className="order-image">
            <img src={meat_01} alt="order01" className='meat' />
            <div className="order-text">
                order small detail 
            </div>
          </div>

    );
}

export default OrderBar