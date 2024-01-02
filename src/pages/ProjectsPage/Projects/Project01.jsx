import React, { useState } from "react";
import "./Project.css";

const Project01 = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleSlideClick = (slideNumber) => {
    setActiveSlide(slideNumber);
  };

  function calculateLeftOffset(slideNumber) {
    return `-${(activeSlide - 1) * 100}%`;
  }

  return (
    <section className="container2">
      <div className="slider">
        <div
          className="slider__images"
          style={{ marginLeft: calculateLeftOffset(activeSlide) }}
        >
          <img
            id="slide-1"
            src="https://picsum.photos/seed/picsum/1920/1080"
            alt=""
          />
          <img
            id="slide-2"
            src="https://picsum.photos/seed/img3/1920/1080"
            alt=""
          />
          <img
            id="slide-3"
            src="https://picsum.photos/seed/img2/1920/1080"
            alt=""
          />
        </div>
        <div className="slider__nav">
          <div
            className={activeSlide === 1 ? "active" : ""}
            onClick={(e) => handleSlideClick(1, e)}
          ></div>
          <div
            className={activeSlide === 2 ? "active" : ""}
            onClick={(e) => handleSlideClick(2, e)}
          ></div>
          <div
            className={activeSlide === 3 ? "active" : ""}
            onClick={(e) => handleSlideClick(3, e)}
          ></div>
        </div>
      </div>
      <div className="header">
        <h1>Windows Server 2019</h1>
      </div>
      <div>
        <p>Lorem</p>
      </div>
    </section>
  );
};

export default Project01;
