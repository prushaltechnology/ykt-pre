import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import "./contactus.scss"
import Maps from '../../components/maps/Maps'

const ContactUs = () => {
  const navigate = useNavigate();
  const handleCont = () => {
    try {
      window.location.href = '#top';
      navigate("/membership")
      
      
    } catch (error) {
       console.error("error")
    }
  };
  const [activeTab, setActiveTab] = useState('contact');

  return (
    <div>
      <Header activeTab={activeTab} />
      <div className='mt-4'>
        <span className='shadow-lg px-3 py-2 rounded-pill  fs-1 font-bold'>Contact Us</span>
        <div className="contact-container d-md-flex">
          <div className="info-container">
            <p>
              Why Join Us-<br></br>1.Diet Plan <br></br>2.Recording Shared<br></br>3.Cleansing Techniques<br></br>
              4.You Can Attend The Same Class Different Batch On Same Day.<br></br><br></br>
              <span> Whether you're a seasoned practitioner or a curious beginner, yoga unfolds as a journey where each
              breath carries you closer to your true self. Join this ancient practice, embark on a voyage of
              self-discovery, and let the essence of yoga illuminate your path to a balanced and fulfilling life. Namaste.</span>
            </p>
        
            <div className='con'>Website: www.shivayog.in</div>
            <div className='con'> Email Address: yogawithkavitatripathi@gmail.com</div>
            <div className='con'>Phone No: +91-8953279337</div>
            <div className='con'>Address:<br></br>Main Office: Amaatra Homes, Vaidpura, Gr. Noida W, near Phulwari Daycare, Greater Noida, Uttar Pradesh 203207<br></br><br></br>Other offices - A207, Ganga Aria, Near Bharat Dhabha, Dhanori, Pune, Maharashtra 411015</div>


            {/* WhatsApp button with logo */}
            <a href="https://wa.me/918953279337" class="whatsapp-button" target="_blank">
              <div class="whatsapp-icon-container py-2 px-3">
                <i class="fa fa-whatsapp whatsapp-icon" style={{ fontSize: '1.8em', color: '#15eb80' }}></i>
                <img src='./whatsappLogo.png' alt='WhatsApp Logo' ></img>
                <span class="chat-text">Chat with us</span>
              </div>
            </a>
          </div>

          <div className="form-container">
            <img src='./class-yoga6u.jpg' alt=''></img>

           
            <button className='contact-button col-md-6 m-auto mt-4' onClick={handleCont}>BOOK NOW</button>
          </div>


        </div>
      </div>
      <Maps />
      <Footer />
    </div>
  )
}

export default ContactUs