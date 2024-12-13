import React, { useRef } from "react";
import "./Testimonials.css";
const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img
        src="./img/next-icon.png"
        alt=""
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src="./img/back-icon.png"
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src="./img/user-1.png" alt="" />
                <div>
                  <h3>Vishal mishra</h3>
                  <span>Dr.AIT,Bengeluru</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                sapiente voluptate deleniti dignissimos! Quae ducimus accusamus
                at porro dicta veritatis, voluptatum sequi eius vel? Mollitia
                totam voluptas quo facere blanditiis?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src="./img/user-2.png" alt="" />
                <div>
                  <h3>Vishal mishra</h3>
                  <span>Dr.AIT,Bengeluru</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                sapiente voluptate deleniti dignissimos! Quae ducimus accusamus
                at porro dicta veritatis, voluptatum sequi eius vel? Mollitia
                totam voluptas quo facere blanditiis?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src="./img/user-3.png" alt="" />
                <div>
                  <h3>Vishal mishra</h3>
                  <span>Dr.AIT,Bengeluru</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                sapiente voluptate deleniti dignissimos! Quae ducimus accusamus
                at porro dicta veritatis, voluptatum sequi eius vel? Mollitia
                totam voluptas quo facere blanditiis?
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src="./img/user-4.png" alt="" />
                <div>
                  <h3>Vishal mishra</h3>
                  <span>Dr.AIT,Bengeluru</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                sapiente voluptate deleniti dignissimos! Quae ducimus accusamus
                at porro dicta veritatis, voluptatum sequi eius vel? Mollitia
                totam voluptas quo facere blanditiis?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
