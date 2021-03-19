import React, {useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        // do this
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        if (window.scrollY < 100) {
          // do this
          handleShow(false);
        } else handleShow(true);
      });
    };
  });

    
    
    return (
        <div className={`nav ${show && "nav_black"}`}>
            
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/0f/" 
            alt="VS Logo" 
            className="nav_logo"/>
            
             <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/0f/" 
            alt="Login Avatar"
            className="nav_avatar"/> 
        </div>
    )
        }


export default Nav
