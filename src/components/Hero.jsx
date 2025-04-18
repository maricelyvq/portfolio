import React, { useRef, useState } from "react";
import Slider from "react-slick";
import my2 from "../assets/images/hireMe.png";
import Type from "./Type";



const socialMediaLinks = [
  "https://www.linkedin.com/in/maricelyvq/",
  "https://github.com/maricelyvq",
  "https://www.instagram.com/maricelyvillalobos/",
  "https://twitter.com/maricelyvq_",
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
    "logo-x",
  ];


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
  
        </div>
      </div>
     
      <div ref={contactRef}></div>
    </section>
  );
};

export default Hero;
