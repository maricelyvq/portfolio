import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import projectOne from "../assets/images/project-1.png";
import projectTwo from "../assets/images/project-2.png";
import projectThree from "../assets/images/project-3.png";
import projectFour from "../assets/images/project-4.png";
import projectFive from "../assets/images/project-5.png";


import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Project = () => {
  const projects = [
    {
      img: projectOne,
      name: "HTML Project",
      github_link: "https://github.com/maricelyvq",
      //live_link: "",
    },
    {
      img: projectTwo,
      name: "Email Template Webpage",
      github_link: "https://github.com/maricelyvq/CSS-Project.git",
      //live_link: "",
    },
       {
      img: projectThree,
      name: "TODO list that uses JavaScript.",
      github_link: "https://github.com/maricelyvq/JS_Project.git",
     // live_link: "",
    },
    {
      img: projectFour,
      name: "Book Store Website",
      github_link:"https://github.com/maricelyvq/Path2tech-Dom_Project.git",
     // live_link: "",
    },
    {
      img: projectFive,
      name: "Weather App using React",
      github_link: "https://github.com/maricelyvq/Weather-App-Template.git",
      //live_link: "",
    },

  ];
  return (
    <section id="projects" className="py-20 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-12/13 w-full h-full ">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg"  />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
