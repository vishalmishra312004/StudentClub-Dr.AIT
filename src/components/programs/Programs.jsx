import React from 'react'
import './Programs.css'
function Programs() {
  return (
    <div className='programs' name="">
        <div className='program'>
            <img src="./images/GDSC2.jpg" alt="" />
            <div className="caption">
              <img src="./img/program-icon-1.png" alt="" />
              <p>GDSC</p>
            </div>
        </div>
        <div className='program'>
            <img src="./images/nano.svg" alt="" />
            <div className="caption">
              <img src="./img/program-icon-3.png" alt="" />
              <p>Nanogram</p>
            </div>
        </div>
        <div className='program'>
            <img src="./images/tech.png" alt="" />
            <div className="caption">
              <img src="./img/program-icon-2.png" alt="" />
              <p>Tech Club</p>
            </div>
        </div>
       
    </div>
  )
}

export default Programs