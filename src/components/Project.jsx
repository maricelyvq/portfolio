import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import project6 from '../assets/images/project-6.png'; 
import project7 from "../assets/images/project-7.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project2,
      name: "Netflix Clone",
      github_link: "https://github.com/aryyan0701/Netflix_Clone",
      //live_link: "https://myjobsearch.netlify.app",
    },
    {
      img: project3,
      name: "Currency converter",
      github_link: "https://github.com/aryyan0701/Currency_converter",
     // live_link: "https://highking01.netlify.app",
    },
    {
      img: project1,
      name: "Type Verse (Check your typing speed)",
      github_link: "https://github.com/aryyan0701/type_verse",
      live_link: "https://aryyan0701.github.io/type_verse/",
    },
   
    {
      img: project4,
      name: "React login/signup Form",
      github_link:
        "https://github.com/aryyan0701/React-form",
      live_link: "https://demo-signin-up-page.netlify.app/",
    },
    {
      img: project6,
      name: "To-do List",
      github_link: "https://github.com/aryyan0701/Todo-list",
      live_link: "https://tik-take-tooo.netlify.app/",
    },
    {
      img: project5,
      name: "Tic Tac Toe Game",
      github_link: "https://github.com/aryyan0701/Tic_Tac_toe",
      live_link: "https://tik-take-tooo.netlify.app/",
    },
   
    {
      img: project7,
      name: "My Personal Work",
      github_link: "https://github.com/aryyan0701/My_work",
     live_link: "https://aryyan0701.github.io/My_work/",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-12/13 w-full h-full">
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
                  <img src={project_info.img} alt="" className="rounded-lg" />
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
                      Live Demo
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
