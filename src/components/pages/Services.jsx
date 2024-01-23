import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'; // Import your custom CSS file

const Services = () => {
  return (
    <div className="services-container">
      <h1 className='heading'>Services</h1>
      <h6 className='sub-heading'>Below are the company's Sevices</h6><br/>
      <div className="services-row">
        {/* Service 1 */}
        <div className="service-col">
          <Link to="/service1" className="service-link">
            <div className="service">
              <img
                src="library-488690_1280.jpg"
                alt="Service 1"
                className="service-image"
              />
              <h2 className="service-title">Education Guidence</h2>
              <p className="service-description">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </Link>
        </div>

        {/* Service 2 */}
        <div className="service-col">
          <Link to="/service2" className="service-link">
            <div className="service">
              <img
                src="ladder-2713346_1280.jpg"
                alt="Service 2"
                className="service-image"
              />
              <h2 className="service-title">Career Guidance</h2>
              <p className="service-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </Link>
        </div>

        {/* Service 3 */}
        <div className="service-col">
          <Link to="/service3" className="service-link">
            <div className="service">
              <img
                src="financial-3207895_1280.jpg"
                alt="Service 3"
                className="service-image"
              />
              <h2 className="service-title">Micro business guidance</h2>
              <p className="service-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </Link>
        </div>

        {/* Service 4 */}
        <div className="service-col">
          <Link to="/service4" className="service-link">
            <div className="service">
              <img
                src="morning-2243465_1280.jpg"
                alt="Service 4"
                className="service-image"
              />
              <h2 className="service-title">Spiritual guidance</h2>
              <p className="service-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
