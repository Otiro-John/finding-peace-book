import React from 'react';
import './newsletter.css';

const newsletter = () => {
  return (
    <section className="newsletter">
      <h2>Stay Inspired</h2>
      <p>Get encouragement and updates from <strong>Finding Peace In The Midst</strong> delivered to your inbox.</p>
      <form className="newsletter-form">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default newsletter;