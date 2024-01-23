import React from 'react';
import './Contact.css';

const Contact = () => {
  const onFinish = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    // Handle form submission logic here
  };

  return (
    <div className="contact-container">
      <div className="contact-heading">
        <h1>Contact Us</h1><br/>
      </div>
      <div className="contact-content">
        <form className="contact-form" onSubmit={onFinish}>
          <div className="form-group-row">
            <input type="text" id="name" name="name" placeholder="Name" required style={{paddingLeft:'20px',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',borderRadius:'8px'}} />
            <input type="email" id="email" name="email" placeholder="Email" required style={{paddingLeft:'20px',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',borderRadius:'8px'}} />
          </div>

          <div className="form-group-row">
            <input type="tel" id="mobile" name="mobile" placeholder="Mobile No." required style={{paddingLeft:'20px',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',borderRadius:'8px'}}/>
            <input type="text" id="subject" name="subject" placeholder="Subject" required style={{paddingLeft:'20px',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',borderRadius:'8px'}} />
          </div>

          <div className="form-group">
            <textarea id="message" name="message" rows="5" placeholder="Message" required style={{paddingLeft:'20px',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',borderRadius:'8px'}}></textarea>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>

        <div className="contact-info">
            <div className='con-row'>
                <div className='icon'>
                   <i className="fas fa-phone"> </i>aaaaaaaaaaaaaaaaaaaaaaaaasssssssssssssssssaaaaaaaaa
                 </div>
                <div className='con-text'>
                  <p>
                    <span className="icon-name">Phone:</span> <br/>
                    <span>+91 8642032556</span>
                  </p>  
               </div>
          </div><br/>
            <div className='con-row'>
                <div className='icon'>
                   <i className="fas fa-envelope"> </i>
                 </div>
                <div className='con-text'>
                  <p>
                    <span className="icon-name">Email:</span> <br/>
                    <span>contact@contact.com</span>
                  </p>  
               </div>
          </div><br/>
            <div className='con-row'>
                <div className='icon'>
                   <i className="fas fa-globe"> </i>
                 </div>
                <div className='con-text'>
                  <p>
                    <span className="icon-name">Web:</span> <br/>
                    <span>www.contact.com</span>
                  </p>  
               </div>
          </div><br/>
          <div className='con-row'>
                <div className='icon'>
                   <i className="fas fa-map-marker-alt"> </i>
                 </div>
                <div className='con-text'>
                  <p>
                    <span className="icon-name">Address:</span> <br/>
                    <span>plot no.1103,karmacts tower,karmacts systems,Nanded City,pune-411041 </span>
                  </p>  
               </div>
          </div><br/>
          <div className="social-media-buttons">
            <button className="social-media-button facebook-btn"><i className="fab fa-facebook-f"></i></button>
            <button className="social-media-button twitter-btn"><i className="fab fa-twitter"></i></button>
            <button className="social-media-button linkedin-btn"><i className="fab fa-linkedin-in"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Contact;
