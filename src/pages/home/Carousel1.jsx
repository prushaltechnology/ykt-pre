import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./carousel.scss";


const Carousel1 = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    const handlePrev = () => {
      setIndex(index - 1 < 0 ? 2 : index - 1);
    };
  
    const handleNext = () => {
      setIndex(index + 1 > 2 ? 0 : index + 1);
    };
   
     const navigate = useNavigate();

     const handleExplore =() => {
      try {
        window.location.href = '#top';
         navigate('/classesType')
      } catch (error) {
        
      }
     }

    return (  
    <div  className='carousel1'>
      <div>
      {/* Carousel Component */}
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          
        <div className="custom-container">
      <div className="custom-text-container">
        <h1 className="custom-heading">Welcome to Yoga With Kavita</h1>
        <p className="custom-info-text">
        Inhale, Exhale And Relax
        </p>
        <div className="exploreoutline">
   <div className="explore" onClick={handleExplore}>Explore Now </div>
   </div>
      </div>
      <div className="custom-ig-container">
        <img src="./slide_1.png" alt="" className="custom-ig" />
        <img src ="./display5.png" alt='' className='mobil'/>
      </div>
    </div>
        </Carousel.Item>
   
        <Carousel.Item>
       
        <div className="custom-container">
      <div className="custom-text-container">
        <h1 className="custom-heading">Welcome to Corporate Yoga</h1>
        <p className="custom-info-text">
        Corporate Yoga Is Being Embraced By Many Progressive Business And Is A Great Benefits And Is A Geat Benefit To The Workplace.
        </p>
        <div className="exploreoutline">
   <div className="explore" onClick={handleExplore}>Explore Now </div>
   </div>
      </div>
      <div className="custom-ig-container">
        <img src="./slide_2.png" alt="" className="custom-ig" />
        <img src ="./corporateyoga2.jpg" alt='' className='mobil'/>
      </div>
    </div>
        </Carousel.Item>

        <Carousel.Item>
        
        <div className="custom-container">
      <div className="custom-text-container">
        <h1 className="custom-heading">Discover Yourself With Yoga</h1>
        <p className="custom-info-text">
        Yoga Unveils Inner Strength, Promotes Self-Awareness, And Fosters Tranquility, Guiding You To Discover Profound Self-Harmony And Balance.
        </p>
        <div className="exploreoutline">
   <div className="explore" onClick={handleExplore}>Explore Now </div>
   </div>
      </div>
      <div className="custom-ig-container">
        <img src="./slide_3.png" alt="" className="custom-ig" />
        <img src ="./discover.jpg" alt='' className='mobil'/>
      </div>
    </div>
        </Carousel.Item>


      </Carousel>

      {/* Control Buttons */}
      <div className="control-buttons">
      
      </div>
    </div>

    </div>
  )
}

export default Carousel1;