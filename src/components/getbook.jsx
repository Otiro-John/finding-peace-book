import React from 'react'
import './getbook.css'
import Amazon from '../assets/amazon.webp'
import Audible from '../assets/audible.webp'
import Barns from '../assets/barns-noble.webp'
import Bookshop from '../assets/bookshop.webp'
import Indigo from '../assets/indigo-book.webp'
import Kindle from '../assets/kindle.webp'
import Shop from '../assets/shop.webp'
import Target from '../assets/target-book.webp'
const getbook = () => {
  return (
    <div className='get-copy-container'>
       <div className="title">
        <h2>💳 Get Your Copy Today…</h2>
       </div>
       <div className="available-outlets">
        <a href="#"><img src={Amazon} alt="...." /></a>
         <a href="#"><img src={Audible} alt="...." /></a>
         <a href="#"><img src={Barns} alt="...." /></a>
        <a href="#"><img src={Bookshop} alt="...." /></a>
         <a href="#"><img src={Indigo} alt="...." /></a>
         <a href="#"><img src={Kindle} alt="...." /></a>
         <a href="#"><img src={Shop} alt="...." /></a>
         <a href="#"><img src={Target} alt="...." /></a>
       </div>
    </div>
  )
}

export default getbook