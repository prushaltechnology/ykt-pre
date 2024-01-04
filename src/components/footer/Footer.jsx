// import React from 'react'
// import  "./footer.scss"
// import { useNavigate } from 'react-router-dom'
// const Footer = () => {
 
  

//   const handleKav = () => {
//      try {
//       window.location.href = '#top';
//        navigate('/');
      
//      } catch (error) {
//        alert('error')
//      }
//   }

//   const handleFaqs = () => {
//     try {
//       window.location.href = '#top';
//        navigate('/faqs');
//     } catch (error) {
//       alert('error')
//     }
//   }


//   const handleTerms = () => {
//     try {
//       window.location.href = '#top';
//        navigate('/terms');
//     } catch (error) {
//       alert('error')
//     }
//   }

//   return (
//     <div className='Origin1'>


       
//             <div className="logoemail">
//         <div className='Yoga' onClick={handleKav}>
//         <div className='Logo'>
//         <img src="./main-logo.jpeg" alt="" height= '100px' width='100px'/>
//         </div>
//         {/* <div className="titleandsub">
//         <div className='Title'>Yoga </div>
//         <div className='subtitle'>
//          With Kavita
//         </div>
//         </div> */}
//         </div>


//        </div>


//        <div className='Base'>
//        <div className='First'>
//         <div className='Links'>
//           Important Links
//           </div>
//         <div className='One'>Classes Type</div>
//         <div className='One'>Memberships</div>
//         <div className='One'>Contact us</div>
//         </div>
//         <div className='First'>
//         <div className='Links'>
//           Classes Types
//           </div>
//         <div className='One'>Yoga</div>
//         <div className='One'>Fusion</div>
//         <div className='One'>Meditation</div>
//         </div>
//         <div className='First'>
//         <div className='Links'>
//           Legal Terms
//           </div>
//         <div className='One' onClick={handleFaqs}>FAQs</div>
//         <div className='One' onClick={handleTerms}>Terms and Conditons</div>
//         <div className='One'>Privacy Policy</div>
//         </div>
//         <div className='First'>
//         <div className='Links'>
//           Contact Us
//           </div>
//         <div className='One'> +91-8953279337</div>
//         <div className='One'>yogawithkavitatripathi@gmail.com</div>
//         </div>
//         </div>
//         <div className='foot'>
//         <div className='copyright'>
//         Copyright & Trademark © 2023 - All Rights Reserved.
//           </div>


//           <div className='Connect'>
//             <a href='https://www.instagram.com/yogawithkavitatripathi/' >
//             <img src  ="./Instagram.png"  alt ="" width= "30px" height= "30px" />
//             </a>
           
         

//             <a href='https://www.facebook.com/profile.php?id=61551485098114'>
//             <img src  ="./Facebook.png"  alt ="" width= "30px" height= "30px"  />
//             </a>
           
//             <a href='https://youtube.com/@YogaWithKavitaTripathi?si=DGzr9VX9th--Mi3i'>
//             <img src  ="./YouTube.png"  alt ="" width= "30px" height= "30px"  />
//             </a>
           

//           </div>


//           </div>
//     </div>
//   )
// }

// export default Footer



import React from 'react'
import { useNavigate } from 'react-router-dom'
import './footer.scss'

const Footer = () => {
 
   const navigate = useNavigate();

    const handleKav = () => {
     try {
      window.location.href = '#top';
       navigate('/');
      
     } catch (error) {
       alert('error')
     }
  }

  return (
    <div className='footer'>
       {/* <img src="./main-logo.jpeg" alt="" height= '100px' width='100px'/> */}
     <div className='sb_footer section_padding'>
     <img onClick={handleKav} className='foot_logo' src="./Final4.svg" alt="" />
      <div className='sb_footer-links'>
        <div className='sb_footer-links_div shadow'>
          <h4>Important links</h4>
          <a href='/classestype' className='Foot-a'>
            <p>Classes Types</p>
          </a>
          <a href='/membership'className='Foot-a'>
            <p>Memberships</p>
          </a>
          <a href='/contactUs'className='Foot-a'>
            <p>Contact Us</p>
          </a>
        </div>
        <div className='sb_footer-links_div shadow'>
          <h4> Classes Types</h4>
          <a href='/classestype'className='Foot-a'>
            <p>Yoga</p>
          </a>
          <a href='/classestype'className='Foot-a'>
            <p>Fusion</p>
          </a>
          <a href='/classestype'className='Foot-a'>
            <p>Meditation</p>
          </a>
        </div>
        <div className='sb_footer-links_div shadow'>
          <h4>Legal terms</h4>
          <a href='/faqs'className='Foot-a'>
            <p>FAQs</p>
          </a>
          <a href='/terms'className='Foot-a'>
            <p>Terms & Conditions</p>
          </a>
          <a href='/terms'className='Foot-a'>
            <p>Privacy Policy</p>
          </a>
        </div>
        <div className='sb_footer-links_div shadow'>
          <h4>Contact Us</h4>
          <a href='tel:(+91) 8953279337'className='Foot-a'>
            <p>(+91)8953279337</p>
          </a>
          <a href='mailto:yogawithkavitatripathi@gmail.com'className='Foot-a'>
            <p className='text-break'>yogawithkavitatripathi@gmail.com</p>
          </a>
        </div>
        <div className='sb_footer-links_div shadow'>
          <h4>Social Links</h4>
          <p ><img src={'./Instagram.png'} alt=" " />
              <a className='foot-p' href='https://www.instagram.com/yogawithkavitatripathi/' target="_blank" rel="noopener noreferrer">Instagram</a>
          </p>
          <p><img src={'./Facebook.png'} alt=" " />
          <a className='foot-p' href='https://www.facebook.com/profile.php?id=61551485098114'  target="_blank" rel="noopener noreferrer">Facebook</a></p>
          <p><img src={'./YouTube.png'} alt=""/>
          <a className='foot-p' href='https://youtube.com/@YogaWithKavitaTripathi?si=DGzr9VX9th--Mi3i'>Youtube</a></p>
        </div>
      </div>
     </div>
     <div className='sb_footer-below'>
      <div className='sv_footer-copyright'>
        <p>
          @{new Date().getFullYear()} YogaWithKavita. All Rights Reserved.
        </p>
      </div>
      {/* <div className='sb_footer-below-links'>
         <a href='/'><div><p>Terms& Conditions</p></div></a>
         <a href='/'><div><p>Terms& Conditions</p></div></a>
         <a href='/'><div><p>Terms& Conditions</p></div></a>
         <a href='/'><div><p>Terms& Conditions</p></div></a>
        </div>  */}
     
     </div>
    </div>
  )
}

export default Footer