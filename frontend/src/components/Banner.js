import React, { useEffect, useState } from 'react';

const Banner = ({ page }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [height, setHeight] = useState('532px');

  useEffect(() => {
    fetch(`http://localhost:5000/api/banner/${page}`)
      .then(res => res.json())
      .then(data => {
        setImageUrl(data.imgUrl);
        setHeight(data.height || '532px');
      })
      .catch(err => console.error('Failed to load banner:', err));
  }, [page]);

  return (
    <section
      className="banner container-fluid"
      style={{
        background: `url(${imageUrl}) center center/cover no-repeat`,
        height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        padding: '0 15px',
      }}
    >
      <h1>
        Lorem ipsum <span className="highlight">dolor sit</span> amet consectetur.
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </section>
  );
};

export default Banner;
