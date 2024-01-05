import React from 'react'
import ImageWithText from './ImageWithText';
import { useNavigate } from 'react-router-dom';
import './customers.scss';

export const Customers = () => {
   
   
  const navigate = useNavigate();
  const handleMemberShips = () => {
   try {
    window.location.href = '#top';
     navigate("/membership")
    
   } catch (error) {
      console.error("error")
   }
  }


  return (
    <div className='customer2'> 
    
      <div className="customertext2 ">Memberships That We Offer</div>
      <div className='member2'>
      <ImageWithText imageUrl="class-yoga19.jpg" text="We have Attractive Membership Plans for you!" />
    </div>
     
<div className="pricing-plans">
  <div className="plan">
    <h3>1-Month Plan</h3>
    <p> 
Immerse yourself in a month of wellness. Experience benefits, set health goals,and commit to a rejuvenating journey.For a healthier, happier you.</p>
    <a href="./membership" target="_blank" rel="noopener noreferrer">Register Now</a>
  </div>

  <div className="plan ">
  <div className="ribbon">Recommended</div>
    <h3>3-Months Plan</h3>
    <p>Access a wealth of yoga classes over 3 months. Explore versatility with our quarterly plan.Elevate your yoga journey today.</p>
    <a href="./membership" target="_blank" rel="noopener noreferrer">Register Now</a>
  </div>
  <div className="plan ">

    <h3>6-Months<br></br> Plan</h3>
    <p>Engage in a transformative wellness journey with our 6-Month Plan. Immerse in yoga sessions and elevate your well-being.





</p>
    <a href="./membership" target="_blank" rel="noopener noreferrer">Register Now</a>
  </div>

  <div className="plan">
    <h3>12-Months Plan</h3>
    <p> Commit to a year of wellness with our yearly plan. Save more, stay dedicated, and prioritize your well-being journey for lasting benefits..





</p>
    <a href="./membership" target="_blank" rel="noopener noreferrer">Register Now</a>
  </div>




</div>


      </div>




  )
}
