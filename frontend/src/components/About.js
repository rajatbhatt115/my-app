// components/About.js
import React from 'react';
import aboutImage from '../img/img_about_us.png'; // adjust path based on actual location


const About = () => {
  return (
     <section className="about-us container-fluid py-5 px-4">
    <div className="row justify-content-center align-items-center gx-4">
      <div className="col-md-6 col-lg-5 d-flex justify-content-center">
         <img src={aboutImage} alt="About Us Image" />
      </div>
      <div className="col-md-6 col-lg-6">
        <h2>About Us</h2>
        <div className="blue-line"></div>
        <p className="subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit. A adipisci voluptas excepturi pariatur error suscipit vero magni officia eius suscipit.</p>
        <p>Vestibulum eu quam nec neque pellentesque efficitur. Mauris tincidunt metus in commodo laoreet. Vestibulum ultricies nunc at purus efficitur consequat.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tempore eaque corporis aspernatur quos consectetur minima, provident repellendus impedit.</p>
      </div>
    </div>
  </section>
  );
};

export default About;
