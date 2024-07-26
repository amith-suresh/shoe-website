import React, { useContext, useState } from 'react';
import { StoreContext } from '../../Context/StoreContext';

const Cart = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form. Please try again later.');
    }
  };

  return (
    <form className='place-order bg-gray-100 p-4 md:p-6 lg:p-8 rounded-lg shadow-lg' onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 pb-4 mb-4">
        <div className="place-order-left">
          <p className="title text-xl font-bold mb-4 border-b-2 pb-2">Delivery Information</p>
          <div className="multi-fields grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder='First Name' className="input-field" name="firstName" onChange={handleInputChange} />
            <input type="text" placeholder='Last Name' className="input-field" name="lastName" onChange={handleInputChange} />
          </div>
          <input type="email" placeholder='Email Address' className="input-field" name="email" onChange={handleInputChange} />
          <input type="text" placeholder='Street' className="input-field" name="street" onChange={handleInputChange} />
          <div className="multi-fields grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder='City' className="input-field" name="city" onChange={handleInputChange} />
            <input type="text" placeholder='State' className="input-field" name="state" onChange={handleInputChange} />
          </div>
          <div className="multi-fields grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder='Zip Code' className="input-field" name="zipCode" onChange={handleInputChange} />
            <input type="text" placeholder='Country' className="input-field" name="country" onChange={handleInputChange} />
          </div>
          <input type='text' placeholder='Phone' className="input-field" name="phone" onChange={handleInputChange} />
        </div>

        <div className="place-order-right">
          <div className="class-total flex-1 flex flex-col gap-5">
            <h1 className='font-extrabold text-2xl border-b-2 pb-2'>Cart Totals</h1>
            
          </div>
          
          <div className="flex flex-col justify-end mt-4">
            <button type="submit" className="bg-black text-white cursor-pointer px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-300">
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Cart;
