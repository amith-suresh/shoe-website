import React, { useContext } from 'react';
import { StoreContext } from '../Context/StoreContext';
import GoBackButton from './GoBackButton';

export default function WomenProductPage() {
  const { addToCart, products } = useContext(StoreContext);
  const womenProducts = products.filter(
    (product) => product.category === "women"
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-center text-red-700 mb-6">
        Women's Products
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {womenProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={product.productImage}
              alt={product.productdescription}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-lg font-semibold mb-2">{product.productdescription}</p>
              <p className="text-gray-700 mb-4">${product.price}</p>
              <button
                type="button"
                onClick={() => addToCart(product.id)}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                Add to cart
              </button>
            </div>
            <GoBackButton />
          </div>
        ))}
      </div>
    </div>
  );
}
