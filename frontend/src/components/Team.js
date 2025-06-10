// React aur hooks (useEffect, useState) ko import kar rahe hain
import React, { useEffect, useState } from 'react';

// Axios ko import kar rahe hain jo HTTP requests bhejne ke liye use hota hai
import axios from 'axios';

// Team component ko export kar rahe hain (default export)
export default function Team() {
  // team naam ka state variable bana rahe hain jisme team members ka data store hoga
  const [team, setTeam] = useState([]);

  // useEffect ka use page load hone ke baad ek baar API call karne ke liye hota hai
  useEffect(() => {
    // Backend API se team members ka data fetch kar rahe hain
    axios.get('http://localhost:5000/api/team')
      .then(res => setTeam(res.data)) // response milne par data ko state me set kar rahe hain
      .catch(err => console.error(err)); // agar error aaye to console me dikhate hain
  }, []); // empty dependency array matlab ye code sirf ek baar chalega (component mount hone par)

  return (
    // Team section ka HTML structure (JSX)
    <section className="our-team container-fluid py-5 px-4">
      
      {/* Section ka heading */}
      <div className="text-center mb-4">
        <h2>Our Team</h2>
        <div className="blue-line mx-auto"></div> {/* Design element */}
      </div>

      {/* Team members ko display karne ke liye Bootstrap grid layout use kar rahe hain */}
      <div className="row justify-content-center gx-4">

        {/* team array ko map karke har member ka card bana rahe hain */}
        {team.map((member, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 d-flex" key={index}>
            <div className="team-card">
              
              {/* Team member ki image dikhai ja rahi hai.
                  imgUrl ke aage localhost ka path lagaya gaya hai taaki image sahi location se aaye */}
              <img src={`http://localhost:5000${member.imgUrl}`} alt={member.name} />

              {/* Team member ka naam */}
              <div className="name">{member.name}</div>

              {/* Team member ki designation (position) */}
              <div className="designation">{member.designation}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
