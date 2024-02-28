import React from "react";
const About = () => {
  const info = [
    // { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "10" },
    //{ text: "Companies Work", count: "06" },
  ];

  const handleDownload = () => {
    const filePath = 'https://aryyan0701.github.io/portfolio/Resume.pdf';
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
                I am a 3rd year B.Tech. software engineer student now a days
                seeking an internship opportunity in this field by applying and
                enhancing my technical skills and gaining practical experience.
                <br />
                As a frontend developer with a focus on React and Next.js, I
                transform static designs into dynamic, responsive, and
                high-performance web applications. With a keen eye for detail, I
                work to create user interfaces that not only meet but exceed
                modern standards of interactivity and aesthetics.
                <br />
                My passion lies in building robust and scalable user interfaces.
                Leveraging the power of React components and the seamless
                navigation capabilities of Next.js, I create immersive and
                performant web experiences that adapt to every device.
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
              <button className="btn-primary" onClick={handleDownload}>Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
