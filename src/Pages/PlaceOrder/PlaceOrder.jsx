import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';

const Cart = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className='place-order bg-gray-100 p-4 md:p-6 lg:p-8 rounded-lg shadow-lg'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 pb-4 mb-4">
        <div className="place-order-left">
          <p className="title text-xl font-bold mb-4 border-b-2 pb-2">Delivery Information</p>
          <div className="multi-fields grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder='First Name' className="input-field" />
            <input type="text" placeholder='Last Name' className="input-field" />
          </div>
          <input type="email" placeholder='Email Address' className="input-field" />
          <input type="text" placeholder='Street' className="input-field" />
          <div className="multi-fields grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder='City' className="input-field" />
            <input type="text" placeholder='State' className="input-field" />
          </div>
          <div className="multi-fields grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder='Zip Code' className="input-field" />
            <input type="text" placeholder='Country' className="input-field" />
          </div>
          <input type='text' placeholder='Phone' className="input-field" />
        </div>

        <div className="place-order-right">
          <div className="class-total flex-1 flex flex-col gap-5">
            <h1 className='font-extrabold text-2xl border-b-2 pb-2'>Cart Totals</h1>
            <div className="cart-total-details flex justify-between">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='mt-3 bg-black' />
            <div className='cart-total-details flex justify-between'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:5}</p>
            </div>
            <hr className='mt-3 bg-black' />
            <div className='cart-total-details flex justify-between'>
              <b className='mt-1 mb-2'>Total</b>
              <b className='mt-1 mb-2'>${getTotalCartAmount()===0?0:getTotalCartAmount()+5}</b>
            </div>
          </div>
          
          <div className="flex flex-col justify-end mt-4">
            <button className="bg-black text-white cursor-pointer px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-300">
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Cart;
