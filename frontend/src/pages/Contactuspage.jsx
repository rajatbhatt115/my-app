import React, { useState } from 'react';
import Banner from '../components/Banner';
import userIcon from '../img/ic_user.svg';
import emailIcon from '../img/ic_email.svg';

function Contactuspage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await response.json();

    if (response.ok) {
      alert('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Failed to send message.');
    }

    console.log('Response:', result);
  } catch (err) {
    console.error('Frontend error:', err);
    alert('Failed to send message.');
  }
};

  return (
    <div>
       <Banner page="contact" />

      <section className="contact-us container py-5">
        <h2 className="text-center mb-2">Contact Us</h2>
        <div className="blue-line mx-auto mb-4"></div>

        <form onSubmit={handleSubmit}>
          <div className="row justify-content-center gx-3 gy-3 mb-3">
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <div className="input-tab w-100">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <img src={userIcon} alt="Icon" />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <div className="input-tab w-100">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <img src={emailIcon} alt="Icon" />
              </div>
            </div>
          </div>

          <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="message-box">
                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <button className="submit-btn" type="submit">Submit</button>
          </div>

          {status && <p className="text-center mt-3">{status}</p>}
        </form>
      </section>
    </div>
  );
}

export default Contactuspage;
