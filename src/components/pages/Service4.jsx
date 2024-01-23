import React from 'react';
import './Service.css'; 

const Service4 = () => {
  return (
    <div className="about-us-container">
      <div className="content-container">
        <h1 className="title">Spiritual guidance</h1><br/>
        <p className="description">
        MongoDB is a popular NoSQL database that provides a flexible and scalable approach to storing and managing data. Unlike traditional relational databases, MongoDB uses a document-oriented model, storing data in flexible, JSON-like documents. This makes it well-suited for handling large volumes of unstructured or semi-structured data and allows for easy adaptation to evolving application requirements.
      
        <br/>Developed by MongoDB Inc., the database is known for its ease of use, high performance, and ability to scale horizontally. MongoDB's flexible schema design allows developers to work with data in a way that mirrors the structure of their code, promoting agility in application development. Additionally, MongoDB offers powerful querying capabilities and supports features like indexing, sharding, and replication for ensuring data availability and fault tolerance. It has become a popular choice for a wide range of applications, from content management systems to real-time analytics and mobile app backends.
          {/* Add more description text as needed */}
        </p>
      </div>
      <div className="image-container">
        <img src="morning-2243465_1280.jpg" alt="About Us" />
      </div>
    </div>
  );
};

export default Service4;


           