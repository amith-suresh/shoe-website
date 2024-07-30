import React from "react";
import SideBar from "./SideBar";
import { StoreContext } from "../../Context/StoreContext";
import { useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Admin() {
  const { products} = useContext(StoreContext);

  const navigate = useNavigate();
  const loGout = () => {
    navigate("/");
  };

  const RemoveItem = (id) => {
    console.log(id);
    axios.delete(`http://localhost:3000/products/${id}`).then((res) => {
      alert("successfully deleted");
      console.log(res.data);
      window.location.reload()
    });
  };

  return (
    <div>
      <div className="h-full">
        <SideBar />
      </div>
      <div className="">
        <h1 className="text-3xl font-medium pt-5 mt-20">
          <strong>Home</strong>
        </h1>
        <button
          className=" bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded absolute top-0 right-0 m-4"
          onClick={loGout}
        >
          Logout
        </button>
      </div>
      <div>
        <div className="products p-72 pr-2 pt-20 pb-16 grid gap-9 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <div key={product.id}>
              <img src={product.productImage} alt={product.productdescription}></img>
              <p>
                <b>{product.productdescription}</b>
              </p>
              <p>${product.price}</p>
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={() => RemoveItem(product.id)}
              >
                Remove item
              </button>
              <Link to={`/editItem/${product.id}`}>
              <button
                type="button"
                className="focus:outline-none text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Edit item
              </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
