import React from 'react'
import './about.css'
import A from '../assets/img1.png'
import B from '../assets/img2.png'
import C from '../assets/img3.png'
const about = () => {
  return (
    <div className='about-content' data-aos="fade-left">
      <div className="title">
        <h2>📖 About the Book</h2>
      </div>
      <div className="about-text">
        <p>
            In a world filled with noise, anxiety, and uncertainty, “Finding Peace In The Midst” invites you to slow down and breathe again.

This book gently walks you through the emotional storms of life, offering practical wisdom, real-life stories, and timeless truths that help restore calm to your mind, heart, and spirit.

Whether you're going through personal struggles or simply want to experience deeper peace, this book is your companion on that journey.

        </p>
      </div>
      <div className="about-images">
        <img src={A} alt="...." />
        <img src={B} alt="...." />
        <img src={C} alt="...." />
      </div>
    </div>
  )
}

export default about