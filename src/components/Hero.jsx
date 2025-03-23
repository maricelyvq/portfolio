import React, { useRef, useState } from "react";
import Slider from "react-slick";
import my2 from "../assets/images/hireMe.png";
import Type from "./Type";

import Badge1 from "../assets/images/badges/Badge1.png";
import Badge2 from "../assets/images/badges/Badge2.png";
import Badge3 from "../assets/images/badges/Badge3.png";
import Badge4 from "../assets/images/badges/Badge4.png";
import Badge5 from "../assets/images/badges/Badge5.png";
import Badge6 from "../assets/images/badges/Badge6.png";
import Badge7 from "../assets/images/badges/Badge7.png";
import Badge8 from "../assets/images/badges/Badge8.png";

const socialMediaLinks = [
  "https://www.linkedin.com/in/maricelyvq/",
  "https://github.com/maricelyvq",
  "https://www.instagram.com/maricelyvillalobos/",
  "https://twitter.com/maricelyvq_",
];

const badgeImages = [
  Badge1,
  Badge2,
  Badge3,
  Badge4,
  Badge5,
  Badge6,
  Badge7,
  Badge8,
];

const Hero = () => {
  const contactRef = useRef(null);
  const [animateIcons, setAnimateIcons] = useState(false);

  const animateSocialMedia = () => {
    setAnimateIcons(true);
    setTimeout(() => setAnimateIcons(false), 1000);
  };

  const social_media = [
    "logo-linkedin",
    "logo-github",
    "logo-instagram",
    "logo-twitter",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={my2} alt="" className="md:w-2/3 h-auto object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Maricely Villalobos</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-300">
            <Type />
          </h4>
          <button className="btn-primary mt-8" onClick={animateSocialMedia}>
            Connect with Me
          </button>
          <div
            className={`mt-8 text-3xl flex items-center md:justify-start justify-center gap-10 ${
              animateIcons ? "animate-icons" : ""
            }`}
          >
            {social_media?.map((icon, index) => (
              <a
                key={icon}
                href={socialMediaLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
              </a>
            ))}
          </div>
          {/* <a href="https://www.credly.com/users/maricelyvq" target="_blank" rel="noopener noreferrer"></a> */}
          <div className="w-full justify-center mt-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"> 
            <Slider {...settings}>
              {badgeImages.map((image, index) => (
                <div key={index} className="p-2 flex justify-center items-center">
                  <img src={image} alt={`Badge ${index + 1}`} className="w-18 h-18 object-contain" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div ref={contactRef}></div>
    </section>
  );
};

export default Hero;
