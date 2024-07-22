import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Registration from './Pages/RegisterationForm/Registration'
import Login from './Pages/LoginForm/Login'
import MenProductsPage from './Components/MenProductsPage'
import WomenProductPage from './Components/WomenProductPage'
import Admin from './Pages/Admin/Admin'





function App() {

  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} exact></Route>
        <Route path="men" element={<MenProductsPage />}></Route>
        <Route path="women" element={<WomenProductPage />}></Route>
        <Route path="Cart" element={<Cart/>}></Route>
        <Route path="order" element={<PlaceOrder/>}></Route>
        <Route path="registration" element={<Registration/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="admin" element={<Admin/>}></Route>
      </Routes>
    </>
  );
}

export default App
