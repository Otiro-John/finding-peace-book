import React from 'react';
import './footer.css';

const footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} <strong>Finding Peace In The Midst</strong>. <br /> All rights reserved.</p>
      </div>
    </footer>
  );
};

export default footer;
