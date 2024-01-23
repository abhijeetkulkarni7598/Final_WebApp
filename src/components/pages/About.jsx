import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="about-us-container">
      <div className="image-container">
        <img src="../public/pexels-andrea-piacquadio-762080.jpg" alt="About Us" />
      </div>
      <div className="content-container">
        <h1 className="title">About Us</h1><br/>
        <h5 className='headings'>Know about Our Company </h5>
        <p className="description">
                Here is the description of our company. We focus on providing the best service...
                We are a leading technology company specializing in innovative solutions for businesses worldwide.
                With a team of skilled professionals, we strive to deliver cutting-edge products and services that exceed client expectations.
                Our mission is to empower businesses with advanced technologies, enabling them to thrive in the digital era.
                We are committed to providing exceptional customer service and building long-lasting partnerships with our clients.
                Our core values of integrity, innovation, and collaboration drive everything we do.
                With years of industry experience, we have a proven track record of delivering successful projects across various sectors.
                We stay ahead of the curve by continuously investing in research and development to stay at the forefront of technological advancements.
                Our diverse and talented team brings together expertise from different disciplines, fostering a culture of creativity and excellence.
                We believe in giving back to the community and actively participate in various social and environmental initiatives.
                Join us on our journey as we transform businesses and make a positive impact in the world through technology.
          {/* Add more description text as needed */}
        </p>
      </div>
    </div>
  );
};

export default About;


           