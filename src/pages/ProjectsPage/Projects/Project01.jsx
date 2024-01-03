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
            src="https://images.unsplash.com/photo-1512810730836-1a7cde39c455?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            id="slide-2"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <img
            id="slide-3"
            src="https://media.licdn.com/dms/image/D4D03AQGzovpJ8c6AQQ/profile-displayphoto-shrink_200_200/0/1702823925582?e=1709769600&v=beta&t=qovwfZl5i1BDnpkS88ingTwYNbVQzITL2W5NSd-6CW8"
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
      <div className="text">
        <div className="header">
          <h1>Internal Windows Server <span>Infrastructure</span></h1>
          <br></br>
          <p>AlgoDebug powstał jako praca magisterska mojego znajomego, mgr. inż. Marcina Wojdata, absolwenta Uniwersytetu Mikołaja Kopernika w Toruniu. Razem z Kołem Naukowym Informatyków postanowiliśmy rozbudować ten projekt, dostrzegając w nim duży potencjał. Dzięki naszej determinacji i gotowości do działania udało nam się stworzyć kompletny projekt pod kierunkiem Marcina. Moją rolą było zaangażowanie w budowę frontendu, a także sporadyczne zajrzenie w obszar backendu.</p>
        </div>
      </div>
    </section>
  );
};

export default Project01;
