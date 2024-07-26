import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import GoBackButton from '../../Components/GoBackButton'

function AdminWomenProduct() {
    const{products}=useContext(StoreContext)
    const WomenProducts = products.filter((product) => product.category === "women");
  return (
    <div>
    <h1 className="font-bold sm:text-black text-center py-4 px-4 sm:px-4 h-5">
      Women's Products
    </h1>
    <div className='mt-4 grid gap-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>
     {WomenProducts.map((product)=>(
      <div key={product.id} className='product'>
          <img src={product.productImage}></img>
          <p><b>{product.productdescription}</b></p>
          <p>${product.price}</p>
      </div>
     ))}
    </div>
    <GoBackButton/>
  </div>
)
}
  


export default AdminWomenProduct
