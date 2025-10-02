import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';


import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import About from './Pages/About'
import Contact from './Pages/Contact '
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import Cart from './Components/Cart/Cart'
import MyOrders from './Pages/MyOrders/MyOrders'
import Verify from './Pages/Verify/Verify'


const App = () => {
   const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      
      <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/cart' element={<Cart/>}/>
           <Route path='/order' element={<PlaceOrder/>}/>
           <Route path='/verify' element={<Verify />} />
           <Route path='/myorders' element={<MyOrders />}/>
           <Route path="/about" element={<About />}/>
           <Route path='/contact' element={<Contact />}/>
      </Routes>
      
      <Footer />
    
    </div>
    </>
  )
}

export default App
