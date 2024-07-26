import React,{useContext} from 'react'
import { StoreContext } from '../../Context/StoreContext'
import GoBackButton from '../../Components/GoBackButton';

function AdminMenProduct() {
    const{products}=useContext(StoreContext);
    const menProducts = products.filter((product) => product.category === "men");
  return (
    <div>
      <h1 className="font-bold sm:text-black text-center py-4 px-4 sm:px-4 h-5">
        Men's Products
      </h1>
      <div className='mt-4 grid gap-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>
       {menProducts.map((product)=>(
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

export default AdminMenProduct
