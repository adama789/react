import React, { useState } from 'react';
import './Project.css';

const Project01 = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleSlideClick = (slideNumber) => {
    setActiveSlide(slideNumber);
  };

  
  return (
    <section className="container2">
      <div className="slider-wrapper">
        <div className="slider">
          <img
            id="slide-1"
            src="https://picsum.photos/seed/picsum/1920/1080"
            alt=""
            className={activeSlide === 1 ? 'active' : ''}
          />
          <img
            id="slide-2"
            src="https://picsum.photos/seed/img3/1920/1080"
            alt=""
            className={activeSlide === 2 ? 'active' : ''}
          />
          <img
            id="slide-3"
            src="https://picsum.photos/seed/img2/1920/1080"
            alt=""
            className={activeSlide === 3 ? 'active' : ''}
          />
        </div>

        <div className="slider-nav">
          <a href="#slide-1" className={activeSlide === 1 ? 'active' : ''} onClick={(e) => handleSlideClick(1, e)}> </a>
          <a href="#slide-2" className={activeSlide === 2 ? 'active' : ''} onClick={(e) => handleSlideClick(2, e)}> </a>
          <a href="#slide-3" className={activeSlide === 3 ? 'active' : ''} onClick={(e) => handleSlideClick(3, e)}> </a>
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
