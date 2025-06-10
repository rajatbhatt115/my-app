// React aur useEffect, useState hooks ko import kar rahe hain
import React, { useEffect, useState } from 'react';

// Banner component banaya gaya hai jo prop 'page' ke base par banner image fetch karega
const Banner = ({ page }) => {

  // imageUrl ke liye state bana rahe hain (initially empty string)
  const [imageUrl, setImageUrl] = useState('');

  // height ke liye state bana rahe hain (default height 532px set ki gayi hai)
  const [height, setHeight] = useState('532px');

  // useEffect: component jab load ho ya 'page' prop change ho, tab ye code chalega
  useEffect(() => {
    // Backend API se banner data fetch kar rahe hain
    fetch(`http://localhost:5000/api/banner/${page}`)
      .then(res => res.json())              // Response ko JSON me convert kar rahe hain
      .then(data => {
        setImageUrl(data.imgUrl);           // Jo image URL mila use set kar rahe hain
        setHeight(data.height || '532px');  // Agar height aayi to use set karo, warna default
      })
      .catch(err => console.error('Failed to load banner:', err)); // Agar error aaye to console me dikhao
  }, [page]);  // 'page' jab change ho to useEffect dobara chale

  // Actual HTML/JSX return ho raha hai — ek section jisme background me banner image hogi
  return (
    <section
      className="banner container-fluid"
      style={{
        // inline style me image set ho rahi hai as background
        background: `url(${imageUrl}) center center/cover no-repeat`,
        height,                              // dynamic height set ki ja rahi hai
        display: 'flex',                     // Flexbox layout use ho raha hai
        flexDirection: 'column',             // Elements vertical line me
        justifyContent: 'center',            // Content vertically center
        alignItems: 'center',                // Content horizontally center
        textAlign: 'center',                 // Text center aligned
        color: 'white',                      // Text ka color white
        padding: '0 15px',                   // Left-right padding
      }}
    >
      {/* Banner ke andar heading aur paragraph */}
      <h1>
        Lorem ipsum <span className="highlight">dolor sit</span> amet consectetur.
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </section>
  );
};

// Component ko export kar rahe hain taaki dusri files me use kiya ja sake
export default Banner;
