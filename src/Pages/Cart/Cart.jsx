import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';
import GoBackButton from '../../Components/GoBackButton';

const Cart = () => {
  const { cartItems,removeFromCart, getTotalCartAmount, calculateTotalPrice, incrementQuantity, decrementQuantity,products } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleIncrement = (itemId) => {
    incrementQuantity(itemId);
  };

  const handleDecrement = (itemId) => {
    decrementQuantity(itemId);
  };

  return (
    <div className='cart'>
      <div className='cart-items p-4 md:p-6 lg:p-8'>
        <div className="cart-items-title grid grid-cols-8 gap-4">
          <p className="col-span-1">Items</p>
          <p className="col-span-1">Title</p>
          <p className="col-span-1">Price</p>
          <p className="col-span-1">Category</p>
          <p className="col-span-1">Total</p>
          <p className="col-span-1">Remove</p>
          <p className="col-span-1">Quantity</p>
        </div>
        <hr className="mb-2 h-1 border-black mt-3" />

        {products.map((item) => {
          if (cartItems[item.id]) {
            return (
              <div key={item.id} className='grid grid-cols-8 gap-4 items-center'>
                <img src={item.productImage} alt={item.productdescription} className='w-20 h-20 col-span-1' />
                <p className='col-span-1'>{item.productdescription}</p>
                <p className='col-span-1'>${item.price}</p>
                <p className='col-span-1'>{item.category}</p>
                <p className='col-span-1'>${item.price * cartItems[item.id]}</p>
                <p className='cursor-pointer col-span-1' onClick={() => removeFromCart(item.id)}>X</p>
                <div className="col-span-1 flex items-center pl-7">
                  <button className="border px-2  bg-blue-950 text-white" onClick={() => handleDecrement(item.id)}>-</button>
                  <span className="mx-2">{cartItems[item.id]}</span>
                  <button className="border px-2 bg-blue-950 text-white" onClick={() => handleIncrement(item.id)}>+</button>
                </div>
              </div>
            );
          }
          return null;
        })}

        <hr className='h-3 border-black mt-4' />

        <div className="flex justify-end mt-4">
          <p className="font-bold">Total: ${calculateTotalPrice()}</p>
        </div>
      </div>

      <div className='cart-bottom mt-5 flex flex-col md:flex-row justify-between gap-[12vw] md:gap-20 mb-4 p-4 md:p-6 lg:p-8'>
        <div className="class-total flex-1 flex flex-col gap-5">
          <h1 className='font-extrabold'>Cart Totals</h1>
          <div className="cart-total-details flex justify-between">
            <p>Subtotal</p>
            <p>{getTotalCartAmount()}</p>
          </div>
          <hr className='mt-3 bg-black' />
          <div className='cart-total-details flex justify-between'>
            <p>Delivery Fee</p>
            <p> $5</p>
          </div>
          <hr className='mt-3 bg-black' />
          <div className='cart-total-details flex justify-between'>
            <b className='mt-1 mb-2'>Total</b>
            <b className='mt-1 mb-2'>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}</b>
          </div>
        </div>

        <div className="flex flex-col justify-end">
          <button onClick={() => navigate("/order")} className="bg-black text-white cursor-pointer px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-300 mb-5 mt-auto">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
      <GoBackButton/>
    </div>
  );
};

export default Cart;
