import React, { useState } from 'react';
// import './ContactPage.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="page-container" id='contact'>
      {/* FontAwesome CDN Link */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      
      <div className="contact-card">
        {/* Left Side: Interaction */}
        <section className="form-area">
          <div className="header-strip">
            <h1>CONTACT</h1>
          </div>
          
          <form className="contact-form">
            <div className="input-group">
              <label>Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
              />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
              />
            </div>
            <div className="input-group">
              <label>Message</label>
              <textarea 
                name="message" 
                rows="1" 
                value={formData.message} 
                onChange={handleChange}
              />
            </div>
            <button type="button" className="send-button">SEND</button>
          </form>

          <div className="footer-strip">
            
          </div>
        </section>

        {/* Right Side: Information */}
        <aside className="info-sidebar">
          <div className="pink-accent"></div>
          <h2>INFO</h2>
          
          <div className="info-details">
            <div className="item">
              <i className="fa-regular fa-envelope"></i>
              <span>info@companyname.com</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-phone"></i>
              <span>+ 26 45 89 235</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-location-dot"></i>
              <span>17 Name St.</span>
            </div>
            <div className="item">
              <i className="fa-regular fa-clock"></i>
              <span>09:00 - 18:00</span>
            </div>
          </div>

          <div className="social-container">
            <div className="circle"><i className="fa-brands fa-facebook-f"></i></div>
            <div className="circle"><i className="fa-brands fa-instagram"></i></div>
            <div className="circle"><i className="fa-brands fa-twitter"></i></div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Contact;