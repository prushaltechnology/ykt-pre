import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './cardCarousel.scss'

const CardCarousel = () => {
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
          <div className='meet_teachers text-centre'>Meet Our Teachers</div>
          <div className="mt-20">
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.name}  className="custom-bg-pink h-[500px] text-black rounded-xl ">
                <div className='h-59 custom1-bg-pink flex justify-center items-center rounded-t-xl py-2'>
                  <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
                </div>
    
                <div className="flex flex-col items-center justify-center gap-0 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-center text-lg font-semibold">{d.city}</p>
                  <p className="text-center">{d.review}</p>
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
      name: `Kavita- Founder & Lead Trainer`,
      city:`Noida ⭐️⭐️⭐️⭐️⭐`,
      img: `./kavita.png`,
      review: `Kavita, a passionate YTT Instructor, holds a certification in Mindfulness, guiding individuals towards holistic well-being. With expertise in balancing energy centers, she empowers her clients on their journey to inner harmony and self-discovery.`
    },
    {
      name: `Kesar Prajapati- Trainer`,
      city:`Gandhinagar ⭐️⭐️⭐️⭐️⭐`,
      img: `./kesar.png`,
      review: ` Kesar, Online yoga instructor from YTT 200 hours based in Gandhinagar, Gujarat. Kesar is a young and dynamic individual globally certified by the Indian Yoga Association. She has strong communication skills and helps yogis attain their fitness goals, being mindful and making them a calmer and happier person overall.`
    },
    {
      name: `Dhanshree Salunkhe- Trainer`,
      city:`Sambhaji Nagar ⭐️⭐️⭐️⭐️⭐`,
      img: `./dhanshree1_img.jpg`,
      review: `Online yoga instructor from YTT 200 hours based in Aurangabad Maharashtra. Dhanshri is a Athletic Coach.Individual globally certified by the Indian Yoga Association. She has strong yoga skills and can help yogis with building their yoga skills.`
    },
    {
      name: `Sarbman Kaur- Trainer`,
      city:`Dubai ⭐️⭐️⭐️⭐️⭐`,
      img: `./sarbman.jpg`,
      review: `Online yoga instructor , based in dubai city. Sarb is a holistic and inspirational practitioner globally certified by the Indian association. A strong will to teach yoga to others and help others to attain their yoga goals .`
    },
    {
      name: `Meghna Panwar- Trainer`,
      city:`Jaipur ⭐️⭐️⭐️⭐️⭐`,
      img: `./meghna.jpg`,
      review: `Meghana is a certified yoga instructor from YTT200 hrs running classes in Jaipur, Rajasthan. She has a bachelor's degree in physical  education and globally certified  by the Indian yoga Association. She is a goal oriented instructor who helps clients achieve their fitness goal and remain motivated for a healthy lifestyle.`
    },
    
  ];

export default CardCarousel