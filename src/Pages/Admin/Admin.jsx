import React from "react";
import SideBar from "./SideBar";
import { StoreContext } from "../../Context/StoreContext";
import { useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Admin() {
  const { products } = useContext(StoreContext);
  const navigate = useNavigate();
  
  const loGout = () => {
    navigate("/");
  };

  const RemoveItem = (id) => {
    console.log(id);
    axios.delete(`http://localhost:3000/products/${id}`).then((res) => {
      alert("successfully deleted");
      console.log(res.data);
      window.location.reload();
    });
  };

  return (
    <div className="flex">
      <div className="hidden lg:block w-64">
        <SideBar />
      </div>
      <div className="flex-1 p-4 lg:p-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl md:text-3xl font-medium">
            <strong>Home</strong>
          </h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={loGout}
          >
            Logout
          </button>
        </div>
        <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 p-4 rounded-lg flex flex-col items-center"
            >
              <img
                src={product.productImage}
                alt={product.productdescription}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <p className="text-lg font-semibold mb-2 text-center">
                {product.productdescription}
              </p>
              <p className="text-xl mb-4">${product.price}</p>
              <div className="flex space-x-2">
                <button
                  type="button"
                  className="bg-red-700 hover:bg-red-800 text-white font-medium rounded-lg text-sm px-4 py-2"
                  onClick={() => RemoveItem(product.id)}
                >
                  Remove item
                </button>
                <Link to={`/editItem/${product.id}`}>
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-800 text-white font-medium rounded-lg text-sm px-4 py-2"
                  >
                    Edit item
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
