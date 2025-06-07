import React from 'react'
import './home.css'
import Hero from '../assets/hero-img.png'
const home = () => {
  return (
    <div className='hero-container' >
       <div className="hero-text">
        <h1 data-aos="fade-left">Finding Peace In The Midst <br /> Discover calm in the chaos. </h1>
         <p>
            A powerful guide to overcoming inner battles, finding rest for your soul, and living with deep, lasting peace—even in the most uncertain times.
         </p>
         <div className="buttons">
            <a href="#"><button>📥 Download a Free Chapter</button></a>
            <a href="#"><button>📘 Get the Book</button></a>
         </div>
       </div>
       <div className="hero-img" data-aos="fade-right">
        <img src={Hero} alt="....." />
       </div>
    </div>
  )
}

export default home