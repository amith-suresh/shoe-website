import React, {useContext} from 'react'
import { PRODUCTS } from '../Products'
import { StoreContext } from '../Context/StoreContext';
import GoBackButton from './GoBackButton';

export default function WomenProductPage() {
  const { addToCart } = useContext(StoreContext);
  const womenProducts = PRODUCTS.filter(
    (product) => product.category === "women"
  )
 
  return (
    <div>
      <h className="font-bold sm:text-black text-center py-4 px-4 sm:px-4">
        Women's Products
      </h>
      <div className="products-list mt-4 grid gap-7 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        {womenProducts.map((product) => (
          <div key={product.id} className="product">
            <img src={product.productImage} alt={product.productdescription} />
            <p>
              <b>{product.productdescription}</b>
            </p>
            <p>${product.price}</p>
            <button
              type="button"
              onClick={() =>addToCart(product.id)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-3.5 h-2.0 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 21"
              >
                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
              </svg>
              Add to cart
            </button>
            <GoBackButton/>
          </div>
        ))}
      </div>
    </div>
  );
}
