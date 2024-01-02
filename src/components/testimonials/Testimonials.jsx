import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './testimonials.scss'

const Testimonials = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1
    //   };
    const settings = {
      accessibility:true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 645,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 1
            }
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
  
  
   
      return (
        <div className=' m-auto bord'>
          <div className='meet_teachers text-left'>What Our Customers Say</div>
          <div className="mt-20">
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.name}  className="custom2-bg-pink h-[500px] text-black rounded-xl ">
                <div className='h-59 custom3-bg-pink flex justify-center items-center rounded-t-xl py-2'>
                  <img src={d.img} alt="" className="h-20 w-20 rounded-full"/>
                </div>
    
                <div className="flex flex-col items-center justify-center gap-0 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-center text-lg font-semibold">{d.city}</p>
                  <p className="text-center test-rev">{d.review}</p>
                  {/* <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button> */}
                </div>
              </div>
            ))}
          </Slider>
          </div>
          
        </div>
      );
}

const data = [
    {
      name: `Priyanka Bhandari`,
      city:`Noida, Uttar Pradesh`,
      img: `./woman.png`,
      review: ` My experience with my yoga coach has been truly transformative. The online classes not only rejuvenated my energy levels but also played a pivotal role in my journey to reduce belly fat. The coach's expertise and personalized guidance made each session enjoyable and effective. I'm grateful for the positive changes in my well-being. A solid 5-star recommendation!🫶🫶❤️
      `
    },
    {
      name: `Kusumlata Kandari`,
      city:`Faridabad, Haryana`,
      img: `./woman.png`,
      review: `This is the best yoga class I have attended so far and the best mentor as well. Individual needs and requirements are properly taken care of by the mentor and gives instructions according to Individual's health issues and substitute of aasans are also taught if one is unable to do that.
      `
    },
    {
      name: `Meenakshi Sharma`,
      city:`Pune, Maharashtra`,
      img: `./woman.png`,
      review: `I have recently started the classes but am feeling great doing yoga with Kavita ji. She really teaches very nicely and is quite humble towards her clients.
      `
    },
    {
      name: `Sonal Dubey`,
      city:`Gondia, Maharashtra`,
      img: `./woman.png`,
      review: `I'm really blessed to have such a great yoga instructor like Kavita di she is very helpful and her teaching skills are just next level after every class I feel so relaxed calm. She is such a great healer as she is easy to follow, gives good cues and pushes u enough to feel you've had a good workout. I would highly recommend her classes . 😇😇😌 Blessed with the best 🙌😇😌🤩 
      `
    },
    {
      name: `Mayank Shekhar`,
      city:`Mumbai, Maharashtra`,
      img: `./man.png`,
      review: `Enjoyed the yoga session with instructor Kavita. She was very helpful and gave sufficient time to each individual in getting the correct stance/ posture and ensured that we are not just doing it but understanding the benefits as well. One of the best instructor for yoga. Must try to experience it.

      `
    },
    {
        name: `Lokesh Pandey`,
        city:`Noida, Uttar Pradesh`,
        img: `./man.png`,
        review: `Kavita is an excellent yoga guide. In the classes which I have attended she uses relatively easy yoga positions but through personal feedback and focusing on small details of posture and breath she achieves deep effects. Her sessions are full of mindfulness. Highly recommended! A huge thank you for being such an amazing yoga teacher. I came away feeling restored from my currently demanding workload. And I had such a surge of energy. Amazing! 

  
        `
      },
      {
        name: `Soumya Pande`,
        city:`Lucknow, Uttar Pradesh`,
        img: `./woman.png`,
        review: `Kavita is very excellent yoga teacher. Her classes are very energising and fun. She's very patient, calm and inspiring  teacher for someone who doesn't normally practice . Thoroughly enjoy my yoga classes. Highly recommend for beginners as well as for experienced 


  
        `
      },
      {
        name: `Savita Pandey`,
        city:`Lucknow, Uttar Pradesh`,
        img: `./woman.png`,
        review: `Kavita's online yoga classes were just what I needed.  I found the way she presented her class was unhurried and had options for the less flexible.  It was relaxing, yet invigorating.  She is very knowledgeable about poses and her voice is calming. Afterwards, I felt like my body had been stretched in a good way and my mind felt more peaceful. I thoroughly recommend her and her classes. 

  
        `
      },
      {
        name: `Poonam Chavan`,
        city:`Vishrambaug, Maharashtra`,
        img: `./woman.png`,
        review: `Excellent. The pranayam and breathing control sessions were very easy to understand and always dependent on the level of the students. I felt comfortable at all times, felt treated with love and respect. Kavita teaches more than just postures. Classes are one hour long and the price are very reasonable. Definitely will recommend for weightloss.


  
        `
      },
      {
        name: `Bhawana Arora`,
        city:`Ghaziabad, Uttar Pradesh`,
        img: `./woman.png`,
        review: `I'm pretty much a complete beginner the teacher had plenty of personal focus and paid attention to my postures. Kavita asked me about my personal issues and problems so gave extra attention because of my backache. She taught me breathing techniques and subtle yoga movements and exercise which gave me relief from my backache problems also helped me in inch loss and weight loss by giving me weekly diet plans. I'm sure the intermediate and advanced lessons are great as well, but I'd definitely recommend pranayam sessions if you're a beginner like me, and want to practice with a positive teacher who gives attention to everyone with their individual issues.


  
        `
      },
      {
        name: `Richa Upreti`,
        city:`Noida, Uttar Pradesh`,
        img: `./woman.png`,
        review: `I have been taking yoga classes from Kavita and I must say she has taught me in a way no one could have ever done, she is very patient and gives full time to her clients making them more confident and happy. Thank you Kavita for changing my life 360 degrees, strongly recommended!!!


  
        `
      },
    
  ];

export default Testimonials