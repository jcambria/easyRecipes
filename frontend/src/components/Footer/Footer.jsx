import React from 'react';
import './footer.css';
import { GiMailbox, GiPhone } from 'react-icons/gi';

function Footer() {
  return (
    
    <footer>
        <hr className='footer'/>

      <div className="footer-info" id='contact'>
        <h3 className='h3'>CONTACT US
          <br />
          <a  href="tel:555-123-4567" className="link"> <GiPhone /> 555-123-4567</a>
          <br />
          <a href="mailto:jrcambria92@gmail.com" className="link"> <GiMailbox />info-MBD@gmail.com</a>
        </h3>
        </div>
        <p> Your suggestions, <br /> are the key to creating a better experience for everyone.</p>
    </footer>
  );
}

export default Footer;

