import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./book.scss"

const Book = () => {

   const navigate = useNavigate();
   const handleBookNow = () => {
    try {
      window.location.href = '#top';
      navigate("/membership")
      
      
    } catch (error) {
       console.error("error")
    }
   }


  return (

    <div className="book-container">
<div className="book-content">
  <div className="book-image">
    <img src="./bookimg1.svg" alt="Yoga With Kavita" />
  </div>
  <div className="book-details">
    <p className="bold-text">Book Classes With Us</p>
    <p className="bold-text">Yoga With Kavita</p>
    <button className="book-button" onClick={handleBookNow}>
      Book Now
    </button>
  </div>
</div>
</div>
/* <div className='book'>

<div className="bookdetails">

 

  <div className="bookimg">
  <img className='bookvector2' src= "./bookvector2.png" alt = ""  />
      <img  className='bookvec' src ="./bookimg1.svg"  alt =""   />
      
  </div>
  <div className="booktext">
  <img className='bookvector1' src= "./bookvector1.png" alt = "" width= "130px" height= "80px" />
      <div className="booktext1"> Book Classes  with 
Us Yoga with Kavita</div>
<div className="booknowcover">
<div className="bookexplore" onClick={handleBookNow}>Book Now</div>
</div>
<img className='bookvector3' src= "./bookvector3.png" alt = "" width= "150px" height= "70px"/>
</div>
</div>
</div> */


  )
}

export default Book
