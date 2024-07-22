import React from 'react'
import './Home.css'
import { PRODUCTS } from '../../Products'
import Product from './Product'

export default function Home() {
  return (
    <div className='home   p-4 sm:p-6 lg:p-8'>
      <div className='home-title text-center py-4 px-4 sm:px-4'>
        <h1 className='font-bold sm:text-black text-red-700 '>'Well Barefoot is kinda Overrated'</h1>
      </div>
      <div className='products mt-4 grid gap-9 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4'>
        {PRODUCTS.map((product)=>(<Product key={product.id} data={product}/>))}
		
        </div>
   
<div className="max-w-2xl mx-auto">

	<footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
		<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com" className="hover:underline" target="_blank">ShoeKampany™</a>. All Rights Reserved.
    </span>
		<ul className="flex flex-wrap items-center mt-3 sm:mt-0">
			<li>
				<a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">About</a>
			</li>
			<li>
				<a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Privacy
					Policy</a>
			</li>
			<li>
				<a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</a>
			</li>
			<li>
				<a href="#" className="text-sm text-gray-500 hover:underline dark:text-gray-400">Contact</a>
			</li>
		</ul>
	</footer>

</div>
</div>
  
  )
};
