import React, { useState } from "react";
import "./Project.css";
import IMG0 from './assets/img0.png';
import IMG1 from './assets/img1.png';
import IMG2 from './assets/img2.png';
import IMG3 from './assets/img3.png';
import IMG4 from './assets/img4.png';
import IMG5 from './assets/img5.png';
import IMG6 from './assets/img6.png';
import ICON0 from './assets/cs-icon.png';
import ICON1 from './assets/postgresql-icon.png';
import ICON2 from './assets/blazor-icon.png';
import ICON3 from './assets/dotnet-icon.png';



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
            src={IMG0}
            alt=""
          />
          <img
            id="slide-2"
            src={IMG1}
            alt=""
          />
          <img
            id="slide-3"
            src={IMG2}
            alt=""
          />
          <img
            id="slide-4"
            src={IMG3}
            alt=""
          />
          <img
            id="slide-5"
            src={IMG4}
            alt=""
          />
          <img
            id="slide-5"
            src={IMG5}
            alt=""
          />
           <img
            id="slide-5"
            src={IMG6}
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
          <div
            className={activeSlide === 4 ? "active" : ""}
            onClick={(e) => handleSlideClick(4, e)}
          ></div>
          <div
            className={activeSlide === 5 ? "active" : ""}
            onClick={(e) => handleSlideClick(5, e)}
          ></div>
          <div
            className={activeSlide === 6 ? "active" : ""}
            onClick={(e) => handleSlideClick(6, e)}
          ></div>
          <div
            className={activeSlide === 7 ? "active" : ""}
            onClick={(e) => handleSlideClick(7, e)}
          ></div>
        </div>
      </div>
      <div className="text">
        <div className="header">
          <h1>Hotel Reservation <span>System</span></h1>

          <p>The <spaan>Hotel Reserve</spaan> is a web application designed to manage hotel bookings.
          It allows users to search for available rooms, make reservations and manage their bookings.
          Hotel administrators can manage room availability, view reservations, and perform other administrative tasks.
          Hotel Reserve is a project created as part of the Programming III course at the university.</p>
        </div>
        <div className="technologies">
          <img src={ICON0} alt=""></img>
          <img src={ICON1} alt=""></img>
          <a className="icon-social" href="https://github.com/adama789/Hotel-Reservation-System" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <img src={ICON2} alt=""></img>
          <img src={ICON3} alt=""></img>
        </div>
      </div>
      
    </section>
  );
};

export default Project01;
