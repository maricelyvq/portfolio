import React from "react";
import Slider from "react-slick";

import Badge1 from "../assets/images/badges/Badge1.png";
import Badge2 from "../assets/images/badges/Badge2.png";
import Badge3 from "../assets/images/badges/Badge3.png";
import Badge4 from "../assets/images/badges/Badge4.png";
import Badge5 from "../assets/images/badges/Badge5.png";
import Badge6 from "../assets/images/badges/Badge6.png";
import Badge7 from "../assets/images/badges/Badge7.png";
import Badge8 from "../assets/images/badges/Badge8.png";
import Badge9 from "../assets/images/badges/Badge9.png";
import Badge10 from "../assets/images/badges/Badge10.png";

const badgeImages = [
  Badge1,
  Badge2,
  Badge3,
  Badge4,
  Badge5,
  Badge6,
  Badge7,
  Badge8,
  Badge9,
  Badge10,
];

const BadgeCarousel = ({ badgeImages }) => {
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
    <div className="w-full justify-center mt-14 max-w-m sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <Slider {...settings}>
        {badgeImages.map((image, index) => (
          <div
            key={index}
            className="flex justify-center items-center"
            alt="Certification Badge"
          >
            <img
              src={image}
              alt={`Badge ${index + 1}`}
              className="p-1 w-18 h-18 object-bottom"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Badges = () => {
  return (
    <section id="badges" className="py-10 px-3 text-white">
      {/* <h3 className="text-4xl font-semibold text-center">
        My <span className="text-cyan-600">Badges</span>
      </h3>
      <p className="text-gray-400 mt-3 text-lg text-center">
        Certifications and Achievements
      </p> */}
      <BadgeCarousel badgeImages={badgeImages} />
    </section>
  );
};

export default Badges;