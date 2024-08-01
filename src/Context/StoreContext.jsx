
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const id = localStorage.getItem("id");


  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      setFilteredProducts(res.data);
      setProducts(res.data);
    });
    axios.get(`http://localhost:3000/users/${id}`).then(res=> setCartItems(res.data.cart[0]) )
  }, []);

  useEffect(() => {
    if (localStorage.getItem("id")) {
      setIsLoggedIn(true);
    }
  }, []);

  const incrementQuantity = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  const decrementQuantity = (itemId) => {
    if (cartItems[itemId] === 1) {
      const newCartItems = { ...cartItems };
      delete newCartItems[itemId];
      setCartItems(newCartItems);
    } else {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: prev[itemId] ? prev[itemId] - 1 : 0,
      }));
    }
  };

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    setCartItems({});
  };


  const addToCart = (itemId) => {
    if (!isLoggedIn) {
      alert("Please login to add items to cart");
      return;
    }
    if (!cartItems[itemId]) {
      axios.patch(`http://localhost:3000/users/${id}`, {cart: [{...cartItems, [itemId]:1}]})
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
      alert("Item added to cart");
    } else {
      axios.patch(`http://localhost:3000/users/${id}`, {cart: [{...cartItems, [itemId]:cartItems[itemId]+1}]})
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      alert("Item added to cart");
    }
  };

  const decOneInCart = (itemId) => {
    
    if (cartItems[itemId] === 1) {
      
      const newCartItems = { ...cartItems };
      delete newCartItems[itemId];
      console.log(newCartItems, 'this is the new cart items')
      axios.patch(`http://localhost:3000/users/${id}`, {cart: [newCartItems]}).then(res=> console.log(res))
      setCartItems(newCartItems);
    } else {
      axios.patch(`http://localhost:3000/users/${id}`, {cart: [{...cartItems, [itemId]:cartItems[itemId]-1}]})
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
     
    }
  };
  const incOneInCart = (itemId) => {
      axios.patch(`http://localhost:3000/users/${id}`, {cart: [{...cartItems, [itemId]:cartItems[itemId]+1}]})
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId)=>{
      const newCartItems = { ...cartItems };
      delete newCartItems[itemId];
      console.log(newCartItems, 'this is the new cart items')
      axios.patch(`http://localhost:3000/users/${id}`, {cart: [newCartItems]}).then(res=> console.log(res))
      setCartItems(newCartItems);
  }


  const calculateTotalPrice = () => {
    let totalPrice = 0;
    products.forEach((item) => {
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
        let itemInfo = products.find(
          (product) => Number(product.id) === Number(itemId)
        );
      
        if (itemInfo) {
          totalAmount += Number(itemInfo.price) * Number(cartItems[itemId]);
        } else {
          console.warn(
            `Product with id ${itemId} not found or has invalid price`
          );
        }
      }
    }
     console.log(totalAmount)

    return totalAmount;
  };

  useEffect(() => {
    // console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    calculateTotalPrice,
    isLoggedIn,
    setIsLoggedIn,
    login,
    logout,
    decOneInCart,
    incOneInCart,
    filteredProducts,
    setFilteredProducts,
    products,
    
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
