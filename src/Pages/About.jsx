import React from "react";
import "./About.css";
import {Link} from 'react-router-dom'

const About = () => {
  return (
     <div>
        
       <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>Food</h2>
          <p>
           
           Food is any substance consumed to provide nutritional support and energy to an organism. 
           It can be raw, processed, or formulated and is consumed orally by animals for growth, health, or pleasure.
            Food is mainly composed of water, lipids, proteins, and carbohydrates.
            Food literacy means having the knowledge to make informed food choices. It covers not just what we eat,
             but how we plan, select, prepare, and share our meals,
             connecting our daily eating decisions with a deeper understanding of food systems, health, and sustainability.

          </p>
          <Link to="/">Go Back Home</Link>
        </div>
        <div className="about-image">
          <img src="/Images/Food1.jpg" alt="Profile" />
        </div>
      </div>
    </section> 
     </div>   
    
  );
};

export default About;
