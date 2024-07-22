import React, { createContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../Products';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false); 



  const login=()=>{
    setIsLoggedIn(true)
    
  }

  const logout=()=>{
    setIsLoggedIn(false)
    localStorage.clear()
    setCartItems({})
  }


  const addToCart = (itemId) => {
    if (!isLoggedIn) {
      alert("Please login to add items to cart");
      return;

    }if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    if (cartItems[itemId] === 1) {
      const newCartItems = { ...cartItems };
      delete newCartItems[itemId];
      setCartItems(newCartItems);
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    PRODUCTS.forEach((item) => {
      if (cartItems[item.id]) {
        totalPrice += item.price * cartItems[item.id];
      }
    });
    return totalPrice;
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(itemId));
        if (itemInfo && typeof itemInfo.price === 'number') {
          totalAmount += itemInfo.price * Number(cartItems[itemId]);
        } else {
          console.warn(`Product with id ${itemId} not found or has invalid price`);
        }
      }
    }

    return totalAmount;
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    PRODUCTS,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    calculateTotalPrice,
    isLoggedIn, 
    setIsLoggedIn, 
    login,
    logout
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
