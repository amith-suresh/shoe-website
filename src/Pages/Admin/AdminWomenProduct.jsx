import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import GoBackButton from '../../Components/GoBackButton';

function AdminWomenProduct() {
  const { products } = useContext(StoreContext);
  const womenProducts = products.filter((product) => product.category === 'women');

  return (
    <div className="p-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">
        Women's Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {womenProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col items-center"
          >
            <img
              src={product.productImage}
              alt={product.productdescription}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <p className="text-lg font-semibold mb-2 text-center">
              {product.productdescription}
            </p>
            <p className="text-xl font-bold text-gray-800">${product.price}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <GoBackButton />
      </div>
    </div>
  );
}

export default AdminWomenProduct;
