// import React, {useState} from 'react'
// import { NavLink, useNavigate } from 'react-router-dom';
// import "./header.scss"
// const Header = () => {

//     const [color, setColor] = useState(false);


//     const scrollToTop = () => {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//       });
//     };


//   const changeColor = () => {
//     if(window.scrollY >= 90) {
//       setColor(true)
//     }else{
//       setColor(false)
//     }
//   }
//   const navigate = useNavigate();
//   const handleHome = ()=> {
//     try {

//       window.location.href = '#top';
//       navigate('/')
//     } catch (error) {
//       alert('error')
//     }
//   }
 
// window.addEventListener('scroll', changeColor)
//   return (
//     <nav className='headermain'>
//         <div className='headerComp'>
//             <div className='headerlogo' onClick={handleHome}>
//             <img src="./main-logo.svg" alt="" height='100px' width= '120px'/>
      
//             </div>
            
//              <div className='menu'>
//                  <span></span>
//                  <span></span>
//                  <span></span>
//              </div>
//             <div className = 'headerstruct'>
              
           
//                   <NavLink to="/" onClick={scrollToTop} className='check' >
//                 Home
//                 </NavLink>
              
//                 <NavLink to = "/classestype"onClick={scrollToTop} className='check'>
               
//                 Classes 
//                 </NavLink>
//                 <NavLink to = "/membership" onClick={scrollToTop} className= 'check'>
//                 Memberships
              
//                 </NavLink>
//                 <NavLink to = "/contactUs" onClick={scrollToTop} className='check'>
//                 Contact Us
               
//                 </NavLink>
                
//             </div>
            

//         </div>
//     </nav>
//   )
// }

// export default Header

import React, { useState } from "react";

import "./header.scss";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
   
   
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };


  return (
    <nav>
      <Link to="/" onClick={scrollToTop} className="title">
        
      <img src="./main-logo.svg" alt="" height='100px' width= '120px'/>
      ShivaYog
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="headerstruct d-sm-flex align-self-center">

      
      <ul className={menuOpen ? "open m-0 p-0" : "m-0 p-0"}>
        <li>
          <NavLink className="py-2 mx-4" to="/" onClick={scrollToTop}>Home</NavLink>
        </li>
        <li>
          <NavLink className="py-2 mx-4" to="/classestype" onClick={scrollToTop}>Classes</NavLink>
        </li>
        <li>
          <NavLink className="py-2 mx-4" to="/membership" onClick={scrollToTop}>Membership</NavLink>
        </li>
        <li>
          <NavLink className="py-2 mx-4" to="/contactUs" onClick={scrollToTop}>Contact Us</NavLink>
        </li>
      </ul>
      </div>
    </nav>
  );
};


export default Header