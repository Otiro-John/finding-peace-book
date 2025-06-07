import React from 'react'
import './testimonial.css'
import Ali from '../assets/ali-abdaal-author.webp'
const testimonials = () => {
  return (
    <div className='testimonials'>
         <div className="title">
            <h2>🗣️ Testimonials</h2>
         </div>
         <div className="testimonial-contents">
            <div className="cards" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-in-out">
                <p>💬 “This book changed the way I face stress. It’s like having a wise, calm friend beside you.”</p>
                <h3>— Sarah M.</h3>
                <img src={Ali} alt="..." />
            </div>

            <div className="cards" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-in-out">
                <p>💬 “The message of peace is timely and deeply needed. Beautifully written and heartfelt.” </p>
                <h3>— Pastor James A.</h3>
                <img src={Ali} alt="..." />
            </div>

            <div className="cards" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-in-out">
                <p>💬 “It felt like God was speaking directly to me through these pages.”</p>
                <h3>— Daniel K.</h3>
                <img src={Ali} alt="..." />
            </div>
         </div>
    </div>
  )
}

export default testimonials