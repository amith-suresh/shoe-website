import React, { useContext } from 'react';
import './Home.css';
import Product from './Product';
import { StoreContext } from '../../Context/StoreContext';

export default function Home() {
  const { filteredProducts } = useContext(StoreContext);

  return (
    <>
      <div className='home p-4 sm:p-6 lg:p-8'>
        <div className='home-title text-center py-4'>
          <h1 className='text-2xl font-bold text-red-700 sm:text-3xl md:text-4xl'>
            Well Barefoot is Kinda Overrated
          </h1>
        </div>
        <div className='products mt-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {filteredProducts.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-8">
          <footer className="p-4 bg-white rounded-lg shadow-md md:flex md:items-center md:justify-between dark:bg-gray-800">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              © 2024 <a href="https://flowbite.com" className="hover:underline" target="_blank" rel="noopener noreferrer">ShoeKampany™</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
              <li>
                <a href="#" className="mr-4 text-sm text-gray-500 hover:underline dark:text-gray-400">About</a>
              </li>
              <li>
                <a href="#" className="mr-4 text-sm text-gray-500 hover:underline dark:text-gray-400">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="mr-4 text-sm text-gray-500 hover:underline dark:text-gray-400">Licensing</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:underline dark:text-gray-400">Contact</a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </>
  );
}
