import React from 'react';
import Navbar from './components/navbar.jsx'; 
import Home from './components/home.jsx'; 
import About from './components/about.jsx'; 
import Author from './components/author.jsx'; 
import Testimonials from './components/testimonials.jsx'; 
import Preview from './components/preview.jsx'; 
import GetCopy from './components/getbook.jsx'; 
import Newsletter from './components/newsletter.jsx'; 
import Footer from './components/footer.jsx'; 
const App = () => {
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
