import React, {useState} from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './faqs.scss'

const Faqs = () => {

  // const [isCollapsed, setCollapsed] = useState(Array(faqs.length).fill(true));
 


  const faqs = [
    {
      question: 'How To Pay For The Course?',
      answer: 'Currently we accept payments via Gpay, PhonePe on +91-8953279337 As Well As On Our UPI ID- kavitatripathi.2591-1@oksbi',
    },
    {
      question: 'Is There Any Dress Code For The Classes?',
      answer: 'Some people dress casually in baggy, loose-fitting shorts and t-shirts. Others prefer to go with tight, elastic leggings and tops. The criteria for choosing yoga clothes is that the dress must allow you to move and stretch freely. In addition, its advised to wear clothes that keeps your body cool. Some people also prefer to carry jumpers and blankets for relaxation.'
    },
    {
      question: 'Do I Need To Buy A Yoga Mat?',
      answer: 'Buying a yoga mat can be a good idea, as it has a lot of utility. Good yoga mats can help you maintain correct posture and prevent slipping on the sweaty floor.',
    },
    {
      question: 'Can I Eat Before The Class?',
      answer: 'It depends on person to person. However, it is advised to avoid heavy meals within two hours of a session, but if you must eat within two hours of the class, an easy-to-digest small meal or snack is recommended. It is best to be hydrated before a lesson, so drink some water.',
    },
    {
      question: 'How Do I Pay For the Classes?',
      answer: 'You can pay for the course by visiting our website and following the payment procedure after clicking on the buy now option.',
    },
    {
      question: 'What Is The Refund Policy?',
      answer: 'Make sure the details mentioned in the payment platform are correct.Check all the details, before booking any session.No refund shall be given after the payment has been made. In any situation, we do not allow refund of the amount.',
    },
    
  ];


  const [isCollapsed, setCollapsed] = useState(Array(faqs.length).fill(true));

  const toggleCollapse = (index) => {
    const updatedCollapseState = [...isCollapsed];
    updatedCollapseState[index] = !updatedCollapseState[index];
    setCollapsed(updatedCollapseState);
  };






  return (
    <div>
        <Header/>
         <div className='faqtopic'>Frequently Asked Questions (FAQs)</div>
        <div className="faq-container">
      
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="question" onClick={() => toggleCollapse(index)}>
            {faq.question}
            <span className={isCollapsed[index] ? 'arrow-down' : 'arrow-up'}>{'\u25BC'}</span>
          </div>
          <p className={`answer ${isCollapsed[index] ? '' : 'show'}`}>{faq.answer}</p>
        </div>
      ))}
    </div>
        <Footer/>
    </div>
  )
}

export default Faqs