import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './classesType.scss'


const YogaClass = () => {
  return (
    <div className="classesType-container">
      <a href="https://forms.gle/XPYBtXvA22TXvigV8" target="_blank" rel="noopener noreferrer">
      <img src="./yoga3D.png" alt="Yoga Class" className="classesType-image" />
        </a>
      
      <h2 className='classesTypetopic'>Yoga Class</h2>
      <p className='classesTypepara'>
        Join our Yoga class to experience a journey of physical and mental well-being. Through a harmonious blend of
        poses, breathwork, and meditation, discover the transformative power of yoga to enhance flexibility, strength, and
        inner peace.
      </p>
    </div>
  );
};

const MeditationClass = () => {
  return (
    <div className="classesType-container">
      <a href="https://forms.gle/XPYBtXvA22TXvigV8" target="_blank" rel="noopener noreferrer">
      <img src="./med3D.png" alt="Meditation Class" className="classesType-image" />
        </a>
      
      <h2 className='classesTypetopic'>Meditation Class</h2>
      <p className='classesTypepara'>
        Immerse yourself in the serene practice of meditation. In this class, we explore mindfulness and contemplative
        techniques to cultivate a calm and focused mind. Join us on a journey to discover the profound benefits of
        meditation for overall well-being.
      </p>
    </div>
  );
};

const FusionClass = () => {
  return (
    <div className="classesType-container">
      <a href="https://forms.gle/XPYBtXvA22TXvigV8" target="_blank" rel="noopener noreferrer">
      <img src="./Frame3D.png" alt="Fusion Class" className="classesType-image"  />
        </a>
      
      <h2 className='classesTypetopic'>Fusion Class</h2>
      <p className='classesTypepara'>
        Experience the best of both worlds with our Fusion class. This unique blend combines elements of yoga and
        meditation, offering a holistic approach to wellness. Join us for a dynamic and rejuvenating session that
        harmonizes body and mind.
      </p>
    </div>
  );
};



const ClassesType = () => {
  return (
   
    <div>
    <Header/>
    {/* <div className='classesType-text'>ClassesTypes</div> */}
    <div className='mt-4'>
        <span className='shadow-lg px-3 py-2 rounded-pill fs-1 font-bold'>Class Types</span>
    </div>
    <div className="app-container">
    
    <YogaClass />
    <MeditationClass />
    <FusionClass />
    
{/* <a href="https://wa.me/918953279337" class="whatsapp-button" target="_blank">
  <div class="whatsapp-icon-container">
    <i class="fa fa-whatsapp whatsapp-icon" style={{ fontSize: '1.8em', color: '#15eb80' }}></i>
    <img src='./whatsappLogo.png' alt='WhatsApp Logo' ></img>
    <span class="chat-text">Chat with us</span>
  </div>
</a> */}
  </div>
  <Footer/>
  </div>
  )
}




export default ClassesType
           