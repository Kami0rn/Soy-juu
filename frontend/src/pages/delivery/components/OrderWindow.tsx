function OrderWindow() {
  return (
    <div className='order-window'>
      <div className="order-window-back">
        <p className="order-window-text">everything in order
          <pre>
            order detail
            member detail
            address</pre>
        </p>
        <button className='button1'>Accept</button>
      </div>
    </div>
  );
}

export default OrderWindow