import React from "react";
import './Footer.css';
import { FaFacebook, FaYoutube, FaLinkedin, FaWhatsapp, FaHeart } from "react-icons/fa";
import { assets } from "../../assets/assets";


const Footer = () => {
  return (
    
    <footer className="footer">
      <div className="footer-container">
        
        {/* Useful Links */}
       <div className="footer-col">
  <h3>
    <img src={assets.logo_icon} alt="Food Logo" className="footer-logo" />
    <p>“Bringing good food to your home with love — quick, easy, and always fresh.”</p>
    
  </h3>
  
</div>

        {/* Company */}
        <div className="footer-col">
          <h3>Good Food</h3>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Career</p>
          <p>Affiliate</p>
        </div>

        {/* Follow Us 
        <div className="footer-col">
          <h3>Follow Us On</h3>
          <p><FaFacebook className="facebook" /> Facebook</p>
          <p><FaYoutube className="youtube" /> Youtube</p>
          <p><FaLinkedin className="linkedin"/> LinkedIn</p>
          <p><FaWhatsapp className="whatsapp"/> Whatsapp</p>
        </div>*/}
        <div className="footer-col">
  <h3>Follow Us On</h3>
  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
    <FaFacebook className="facebook" /> Facebook
  </a>
  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
    <FaYoutube className="youtube" /> Youtube
  </a>
  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="linkedin" /> LinkedIn
  </a>
  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
    <FaWhatsapp className="whatsapp" /> Whatsapp
  </a>
</div>


        {/* Download App */}
        <div className="footer-col">
          <h3>Download App</h3>
          <img src="/Images/goo.png" alt="Download App" />
        </div>
      </div>

      <hr />
      <p className="copyright">
       {/* Made with <FaHeart className="heart" /> by Easy Tutorials*/}
        "From our kitchen to your doorstep with love ❤️"
      </p>
    </footer>

  );
};

export default Footer;


