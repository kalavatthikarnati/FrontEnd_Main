import React, { useContext, useState } from 'react'
import './Navbar.css'
import { FaClock, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';
import { assets } from '../../assets/assets';
import { FaSun, FaMoon } from "react-icons/fa"; // add icons


const Navbar = ({setShowLogin}) => {
       const [menu,setMenu] = useState("home");
       const{getTotalCartAmount,token,setToken} = useContext(StoreContext);
       const navigate = useNavigate();
         const [theme, setTheme] = useState("light");

       const logout = () =>{
          localStorage.removeItem("token");
          setToken("");
           navigate("/");
       }

        const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme; // apply theme to body
  };

  return (
    <>
    <div>
    <header className="top-header">
      <ul className="header-list">
        <li>
          <i className="fas fa-phone"></i>
          <a href="tel:+880124567890">+88 (012) 34-567890</a>
        </li>
        <li>
          <i className="fas fa-envelope"></i>
          <a href="mailto:info@example.com">info@example.com</a>
        </li>
        <li>
          <i className="fas fa-map-marker-alt"></i>
          <span>Hyderabad, Tarnaka-1216</span>
        </li>
        <li>
          <i className="fas fa-clock"></i>
          <span>9AM to 11PM</span>
        </li>
      </ul>
    </header>
    
    <div className='navbar'>
      <Link to="/"><img src={assets.brand} alt='' className='logo' /></Link>
      <ul className='navbar-menu'>
        {/*
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="About"?"active":""}>menu</li>
        <li onClick={()=>setMenu("Mobileapp")} className={menu==="Mobileapp"?"active":""}>Mobileapp</li>
        <li onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us"?"active":""}>Contact Us</li>*/}
                   <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
      </ul>

      <div className="navbar-right">
            {/* 🌙 Theme Toggle Button */}
            <button onClick={toggleTheme} className="theme-btn">
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
      <div className='navbar-right'>
       <img src={assets.search} alt='' className='' />
       <div className='navbar-search_icon'>
           <Link to="/cart"><img src={assets.basket} alt='' className='' /></Link>
           <div className={getTotalCartAmount()===0?"":"dot"}></div>
           </div>
           {!token?<button onClick={()=>setShowLogin(true)}>SignIn</button>
            :<div className='navbar-profile'>
         <img src={assets.profile2} alt="profile" />
             <ul className='nav-profile-dropdown'>
              <li onClick={()=>navigate('/myorders')}><img src={assets.order} alt='' /><p>Order</p></li>
               
                <hr />
                <li onClick={logout}><img src={assets.logout} alt='' /><p>Logout</p></li>
              </ul>
              </div>
              }
          </div>
      </div>
    </div>
    </div>
    </>
  )

}

export default Navbar
