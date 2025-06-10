import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Team() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/team')
      .then(res => setTeam(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="our-team container-fluid py-5 px-4">
      <div className="text-center mb-4">
        <h2>Our Team</h2>
        <div className="blue-line mx-auto"></div>
      </div>

      <div className="row justify-content-center gx-4">
        {team.map((member, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 d-flex" key={index}>
            <div className="team-card">
              {/* ✅ Use imgUrl here, ensure full path is correct */}
              <img src={`http://localhost:5000${member.imgUrl}`} alt={member.name} />
              <div className="name">{member.name}</div>
              <div className="designation">{member.designation}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
