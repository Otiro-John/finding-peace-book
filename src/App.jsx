import React, { useEffect } from 'react';
import Navbar from './components/navbar.jsx'; 
import Home from './components/home.jsx'; 
import About from './components/about.jsx'; 
import Author from './components/author.jsx'; 
import Testimonials from './components/testimonials.jsx'; 
import Preview from './components/preview.jsx'; 
import GetCopy from './components/getbook.jsx'; 
import Newsletter from './components/newsletter.jsx'; 
import Footer from './components/footer.jsx'; 

import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {
      useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Author />
      <Testimonials />
      <Preview />
      <GetCopy />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
