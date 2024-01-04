import React from 'react'
import './ourstory.scss'


const OurStory = () => {
  return (
    <div className='story'>
      <img className="story_bg " src="./storybg.png" alt="" />
      <div className="story_content">
        <div>
          <div className="story_title">Our Story</div>
          <div className="story_paragraphs">
            <p className="story_paragraph">
              At shivayog – yoga with Kavita Tripathi, we offer a wide range of online yoga sessions tailored to
              meet the unique needs and goals of individuals of all ages and body types. Our experienced instructors
              provide personalized guidance based on specific ailments such as getting relief from PCoS, PCoD, thyroid
              & hormonal problems, joint pain, BP, diabetes, difficulty in conceiving, mental stress, anxiety, depression,
              etc. as well as fitness objectives such as weight loss, waist loss, inch loss, fat loss, etc., ensuring each
              practice is safe, effective, and enjoyable. Whether you're a beginner or an experienced yogi, we offer virtual,
              offline as well as personalised classes that focus on stress relief, flexibility, mindfulness, physical and mental health, and self-care. Join us today
              and experience the transformative power of yoga from where you are.


            </p>
            <p className="story_paragraph">

              Kavita Tripathi – A visionary coming from an army background is a disciplinarian. In her past life, she was an educator and used to teach at Army Public School in Pune.
              Kavita returned to India after staying in the United Kingdom for several years, and founded shivayog – Yoga with Kavita Tripathi – the way of life after
              understanding the healthcare system in India and the challenges being faced by the people in maintaining general wellbeing & mindfulness. Kavita then decided
              to bring it upon herself to be the agent of transformative change at an international scale.
            </p>

          </div>
        </div>
      </div>
      {/* <img className="storyvector" src="./storyvector.png" alt="" /> */}
      <div className='d-flex justify-content-end'>
        <img className="storying" src="./class-yoga59.jpg" alt="" />
      </div>


    </div>

  )
}

export default OurStory