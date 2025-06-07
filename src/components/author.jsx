import React from 'react'
import './author.css'
import Ali from '../assets/ali-abdaal-author.webp'
const author = () => {
  return (
    <div className='about-author'>
         <div className="title" >
            <h2 data-aos="fade-up" data-aos-duration="1000">🖊️ About the Author</h2>
         </div>
         <div className="author-content">
            <div className="author-img" data-aos="fade-right" data-aos-duration="1000">
               <img src={Ali} alt="...." />
            </div>

            <div className="author-text">
                <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    Hi, I'm John Otiro, a writer, speaker, and believer in the power of peace over pressure.

After facing years of internal battles and emotional struggles, I’ve learned that true peace isn't the absence of problems—it's the presence of hope and purpose in the midst of them.

This book is born out of that journey, and I wrote it for people just like you—who long for something deeper than just “getting by.”

Let’s walk this path to peace together.

                </p>
            </div>
         </div>
    </div>
  )
}

export default author