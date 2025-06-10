// React aur useState hook ko import kar rahe hain
import React, { useState } from 'react';

// Banner component ko import kar rahe hain
import Banner from '../components/Banner';

// Icons import kar rahe hain jo form ke input fields me dikhaye jaayenge
import userIcon from '../img/ic_user.svg';
import emailIcon from '../img/ic_email.svg';

function Contactuspage() {
  // Name, Email, Message aur Status ke liye state variables banaye gaye hain
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  // Form submit hone par yeh function chalega
  const handleSubmit = async (e) => {
    e.preventDefault(); // Form ke default reload behavior ko rok dete hain

    try {
      // Backend ko POST request bhej rahe hain contact form ka data ke saath
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Data JSON format me bhej rahe hain
        },
        body: JSON.stringify({ name, email, message }), // Data ko stringify kar rahe hain
      });

      // Backend se milne wale response ko JSON me convert kar rahe hain
      const result = await response.json();

      if (response.ok) {
        // Agar response sahi aaya to user ko success message dikhate hain
        alert('Message sent successfully!');
        // Form fields ko reset kar dete hain
        setName('');
        setEmail('');
        setMessage('');
      } else {
        // Agar kuch galat ho to error alert dikhate hain
        alert('Failed to send message.');
      }

      console.log('Response:', result); // Console me response dikhate hain (debug ke liye)
    } catch (err) {
      console.error('Frontend error:', err); // Agar koi frontend error aaye to console me dikhe
      alert('Failed to send message.'); // User ko alert dikhate hain
    }
  };

  return (
    <div>
      {/* Banner component render kar rahe hain jisme page="contact" diya gaya hai
          jisse yeh contact page ke liye sahi banner image dikhaye */}
      <Banner page="contact" />

      {/* Contact form section */}
      <section className="contact-us container py-5">
        <h2 className="text-center mb-2">Contact Us</h2>
        <div className="blue-line mx-auto mb-4"></div> {/* Design line */}

        {/* Form start */}
        <form onSubmit={handleSubmit}>
          {/* Name aur Email ke input fields */}
          <div className="row justify-content-center gx-3 gy-3 mb-3">
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <div className="input-tab w-100">
                <input
                  type="text"
                  placeholder="Your Name" // Placeholder text
                  value={name}
                  onChange={(e) => setName(e.target.value)} // Input me likhne par state update hoti hai
                  required
                />
                <img src={userIcon} alt="Icon" /> {/* User icon */}
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
                <img src={emailIcon} alt="Icon" /> {/* Email icon */}
              </div>
            </div>
          </div>

          {/* Message box */}
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

          {/* Submit button */}
          <div className="text-center mt-4">
            <button className="submit-btn" type="submit">Submit</button>
          </div>

          {/* Status message agar kuch ho to dikhate hain */}
          {status && <p className="text-center mt-3">{status}</p>}
        </form>
      </section>
    </div>
  );
}

// Component ko export kar rahe hain taaki use App me ya routing me include kar sakein
export default Contactuspage;
