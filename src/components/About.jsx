import React from "react";
const About = () => {
  const info = [
    // { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "10" },
    { text: "Companies Work", count: "01" }
  ];

 
  const googleDriveLink = "";


  const navigateToResume = () => {
    window.open(googleDriveLink, "_blank");
  };

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              I was born in Delaware and raised in Isla de Margarita, a beautiful island in Venezuela that shaped my love for culture, music, and tradition. Growing up, I dreamed of becoming a civil engineer, but life took an unexpected turn, and I ended up enrolling in computer science. In what I can only describe as fate, I discovered a true passion for technology and fell in love with the field, obtaining my Degree in Computer Science.
                <br/> After many years, I returned to the United States and now call Texas home, embracing new opportunities and challenges. With over 5 years of experience in Information Security and supporting others, I’ve developed personal and professional resilience and adaptability.
                <br />
                I enjoy learning new things, especially modern tools and trends, and I’m passionate about improving my skills to contribute meaningfully to my work. Outside of work, I love spending time outdoors, exploring nature, and sharing my love of music and traditions with others. Building connections and growing alongside others is something I truly value. I’m excited to continue bringing my experience, curiosity, and love for learning to everything I do.
                <br /> 
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <button className="btn-primary" onClick={navigateToResume}>Check Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
