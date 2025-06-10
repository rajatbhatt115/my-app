// components/FAQ.js
import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'What is your refund policy?',
      answer: 'We offer a 30-day refund policy for all purchases. Contact support for assistance.'
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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="blue-line mx-auto"></div>

      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`faq-tab ${openIndex === index ? 'open' : ''}`}
        >
          <div
            className="faq-tab-header"
            tabIndex={0}
            onClick={() => toggleFAQ(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFAQ(index);
              }
            }}
          >
            <h3>{faq.question}</h3>
            <div className="faq-icon">{openIndex === index ? '−' : '+'}</div>
          </div>
          <div className="faq-tab-content">
            {openIndex === index && <p>{faq.answer}</p>}
          </div>
        </div>
      ))}
    </section>
  );
};

export default FAQ;
