import React from 'react'
import './Gallery.css'
const Gallery = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src="./images/k14.jpg" alt="" />
            <img src="./images/k13.jpg" alt="" />
            <img src="./images/m9.jpg" alt="" />
            <img src="./images/m5.jpg" alt="" />
        </div>
        <button className='btn dark-btn'>See more <img src="./img/white-arrow.png" alt="" /></button>
    </div>
  )
}

export default Gallery