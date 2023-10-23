import React, { useState } from 'react';
import Faq from './Faq';
import {MdPlayArrow} from "react-icons/md";

const FAQsection = () => {

    const [faqs, setFaqs] = useState([
        {
          question: "How does an investor gain access to MF utility?",
          answer: "Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
          open: false
        },
        {
          question: "Will investors be able to have multiple Common Account Numbers?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
          open: true
        },
        {
          question: "How does an investor gain access to MF utility?",
          answer: "Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
          open: false
        }
      ]);
    
      const toggleFAQ = (index) => {
        setFaqs(
          faqs.map((faq, i) => {
            if (i === index) {
              faq.open = !faq.open;
            } else {
              faq.open = false;
            }
            return faq;
          })
        );
      };   

  return (
    <>
      <div className="faqs">
        <h2>FAQ</h2>
          {faqs.map((faq, index) => (
            <Faq faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
      </div>

      <div className='subscribe'>
        <div className='subscribe-text'>
          <p>Subscribe</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem eu dolor rhoncus</p>
        </div>
        <div className='subscribe-input'>
          <input type='text' placeholder='Enter your Email Address'/>
          <span>Subscribe Now <MdPlayArrow /></span>
        </div>
      </div>
    </>
  )
}

export default FAQsection