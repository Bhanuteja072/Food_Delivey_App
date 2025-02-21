import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {


  const {getTotalCartAmount}=useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Details</p>
        <div className="multi-fields">
          <input type="text" placeholder='FirstName' required/>
          <input type="text" placeholder='MiddleName'/>

          <input type="text" placeholder='LastName' required/>

        </div>
        <input type="email"  placeholder='ENter Your email'/>
        <input type="text" placeholder='Area' />
        <input type="text" placeholder='street' />


        <div className="multi-fields">
          <input type="text" placeholder='City' required/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='pincode' required/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone Number' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
            <h2>CartTotal</h2>
            <div>
              <div className="cart-total-details">
                <p>SubTotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr/>
              <div className="cart-total-details">
                <p>Delivary Charges</p>
                <p>${getTotalCartAmount()===0?0:2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <strong>Totall</strong>
                <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
             </div>
             <button onClick={()=>navigate('/order')}>Proceed to Payment</button>

          </div>
      
      </div>

    </form>

      
  )
}

export default PlaceOrder
