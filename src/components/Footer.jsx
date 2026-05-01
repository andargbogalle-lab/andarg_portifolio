import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Andargachew Bogale. All rights reserved.</p>
        <p className="footer-tagline">Built with React & ❤️</p>
      </div>
    </footer>
  );
}

export default Footer;
