import React, { useState } from "react";
import "./Project.css";
import IMG0 from './assets/img0.jpg';
import IMG1 from './assets/img1.png';
import IMG2 from './assets/img2.PNG';
import IMG3 from './assets/img3.PNG';
import IMG4 from './assets/img4.PNG';



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
        </div>
      </div>
      <div className="text">
        <div className="header">
          <h1>Internal Windows Server <span>Infrastructure</span></h1>
          <br></br>
          <span>In this project, I set up a virtualized environment using <spaan>VirtualBox</spaan>. Within this network, I installed several servers:
          <br></br><br></br><li>WIN-SERVER-01 DC</li>
          <li>WIN-SERVER-02 DC</li>
          <li>WIN-SERVER-03 RODC</li>
          <li>WIN-SERVER-01 CD</li>
          <li>WIN-SERVER-FS</li>
          <li>WIN-SERVER-iSCSI</li>
          <li>WIN-SERVER-WSUS</li>
          <li>WIN-SERVER-FTP</li><br></br></span> <p>

To establish a solid network, I configured <spaan>Active Directory</spaan> Domain Services and set up <spaan>DNS</spaan>, ensuring seamless communication among the servers. Additionally, I implemented a <spaan>firewall</spaan> to enhance network security.
Further more, I added users to different domains, ensuring a structured and organized user management system.

A File Server with <spaan>SMB</spaan> functionality was created, featuring a share at <spaan>\WIN-SERVER-FS\IT</spaan>, designated for a group of users. 
A virtual <spaan>iSCSI</spaan> disk was configured along with an initiator for efficient data storage.

The Windows Server Update Service <spaan>(WSUS)</spaan> was synchronized to manage updates across the servers effectively.

<spaan>Printers</spaan> got enabled within the network as well.

<spaan> FTP</spaan> services were configured with a focus on security, allowing selected users to connect locally, enhancing file transfer capabilities.

Finally, I familiarized myself with <spaan>Hyper-V</spaan>, broadening my knowledge of virtualization technologies.</p>
        </div>
      </div>
    </section>
  );
};

export default Project01;
