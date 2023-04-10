import React from 'react';
import './footer.css';

function Footer() {
  return (
    
    <footer>
        <hr className='footer'/>
      <div className="footer-info" id='footer'>
        <h3>Contact Us</h3>
        <div className="contact-details">
          <div className="phone">
            <i className="fas fa-phone"></i>
            <a href="tel:555-123-4567" className="link">555-123-4567</a>
          </div>
          <div className="email">
            <i className="far fa-envelope"></i>
            <a href="mailto:info@company.com" className="link">info@company.com</a>
          </div>
        </div>
        <p>Short summary about the company</p>
      </div>
    </footer>
  );
}

export default Footer;

