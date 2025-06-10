// React library ko import kar rahe hain taaki hum React component bana sakein
import React from 'react';

// About section ke liye ek image import kar rahe hain (image ka path actual location ke hisaab se adjust hona chahiye)
import aboutImage from '../img/img_about_us.png'; // adjust path based on actual location

// About component define kar rahe hain
const About = () => {
  return (
    // About Us section start ho raha hai - bootstrap classes se styling ho rahi hai
    <section className="about-us container-fluid py-5 px-4">
    
      {/* Row banayi gayi hai jisme image aur text dono side-by-side show honge */}
      <div className="row justify-content-center align-items-center gx-4">

        {/* Pehla column - image dikhane ke liye */}
        <div className="col-md-6 col-lg-5 d-flex justify-content-center">
          {/* Image tag - src me upar import ki gayi image use ho rahi hai */}
          <img src={aboutImage} alt="About Us Image" />
        </div>

        {/* Dusra column - text content ke liye */}
        <div className="col-md-6 col-lg-6">
          {/* Heading */}
          <h2>About Us</h2>

          {/* Blue line design ke liye ek div (ye CSS se styling hoti hai) */}
          <div className="blue-line"></div>

          {/* Pehla paragraph - subheading ke roop me */}
          <p className="subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit. A adipisci voluptas excepturi pariatur error suscipit vero magni officia eius suscipit.</p>

          {/* Do aur paragraphs - additional information ke liye */}
          <p>Vestibulum eu quam nec neque pellentesque efficitur. Mauris tincidunt metus in commodo laoreet. Vestibulum ultricies nunc at purus efficitur consequat.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tempore eaque corporis aspernatur quos consectetur minima, provident repellendus impedit.</p>
        </div>

      </div>
    </section>
  );
};

// About component ko export kar rahe hain taaki ise dusri files me use kiya ja sake
export default About;
