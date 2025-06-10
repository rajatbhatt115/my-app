// React aur useState hook ko import kar rahe hain
import React, { useState } from 'react';

const FAQ = () => {
  // openIndex ek state hai jisme currently open (visible) FAQ ka index store hota hai
  const [openIndex, setOpenIndex] = useState(null);

  // Ye FAQ ke questions aur answers ka data hai — ek array of objects
  const faqData = [
    {
      question: 'What is your refund policy?', // Question
      answer: 'We offer a 30-day refund policy for all purchases. Contact support for assistance.' // Answer
    },
    {
      question: 'How long does delivery take?',
      answer: 'Delivery times vary by product and location, but usually range between 3-7 business days.'
    },
    {
      question: 'Can I change my order?',
      answer: 'Order changes can be made within 24 hours of purchase by contacting our support team.'
    }
  ];

  // Ye function kisi ek FAQ pe click hone par usko toggle karta hai (open/close)
  const toggleFAQ = (index) => {
    // Agar same FAQ pe dobara click hota hai to close kar deta hai (null)
    // warna clicked index open ho jata hai
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // FAQ section ka HTML (JSX) code
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2> {/* Heading */}
      <div className="blue-line mx-auto"></div> {/* Design ke liye ek blue line */}

      {/* Sabhi FAQs ko map function ke through display kar rahe hain */}
      {faqData.map((faq, index) => (
        <div
          key={index} // har item ke liye unique key
          className={`faq-tab ${openIndex === index ? 'open' : ''}`} // agar open hai to 'open' class add hogi
        >
          <div
            className="faq-tab-header"
            tabIndex={0} // keyboard navigation ke liye
            onClick={() => toggleFAQ(index)} // mouse click se FAQ toggle
            onKeyDown={(e) => {
              // agar keyboard se Enter ya Space dabaya to bhi toggle hoga
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFAQ(index);
              }
            }}
          >
            <h3>{faq.question}</h3> {/* FAQ ka question */}
            <div className="faq-icon">{openIndex === index ? '−' : '+'}</div> {/* Icon '+' ya '−' */}
          </div>

          {/* Agar yeh FAQ open hai to answer dikha rahe hain */}
          <div className="faq-tab-content">
            {openIndex === index && <p>{faq.answer}</p>}
          </div>
        </div>
      ))}
    </section>
  );
};

// Component ko export kar rahe hain taaki use kahin aur kiya ja sake
export default FAQ;
