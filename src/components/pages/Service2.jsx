import React from 'react';
import './Service.css'; 

const Service2 = () => {
  return (
    <div className="about-us-container">
      <div className="content-container">
        <h1 className="title">Career Guidence</h1><br/>
        <p className="description">
            
        Google Compute Engine (GCE) is a part of Google Cloud Platform, offering virtual machine (VM) instances for running applications on Google's infrastructure. GCE provides scalable and flexible computing resources, allowing users to deploy and manage virtual machines tailored to their specific needs. With support for various operating systems and configurations, GCE enables users to run diverse workloads, from simple web applications to complex data processing tasks.
        <br/> Key features of Google Compute Engine include automatic scaling, load balancing, and integration with other Google Cloud services. Users can choose from a variety of machine types based on their performance requirements, and GCE offers options for preemptible VMs, providing cost-effective solutions for temporary and batch processing workloads. With a global network and data centers strategically located around the world, Google Compute Engine ensures low-latency and reliable performance for applications deployed on its platform.
      
          {/* Add more description text as needed */}
        </p>
      </div>
      <div className="image-container">
        <img src="ladder-2713346_1280.jpg" alt="About Us" />
      </div>
    </div>
  );
};

export default Service2;


           