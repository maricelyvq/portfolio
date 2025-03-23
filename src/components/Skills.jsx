import React from 'react';

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      logo: "logo-html5",
      level: "Advanced",
      count: 85,
    },
    {
      name: "CSS",
      logo: "logo-css3",
      level: "Advanced",
      count: 80,
    },
    {
      name: "JAVASCRIPT",
      logo: "logo-javascript",
      level: "Intermediate",
      count: 60,
    },
    {
      name: "REACT",
      logo: "logo-react",
      level: "Beginner",
      count: 40,
    },
    {
      name: "MONGODB",
      logo: "fa-brands fa-mdb",
      level: "Beginner",
      count: 40,
    },
    {
      name: "NODEJS",
      logo: "logo-nodejs",
      level: "Intermediate",
      count: 60,
    },
    {
      name: "SQL",
      logo: "server-outline",
      level: "Intermediate",
      count: 60,
    },
    {
      name: "EXPRESS",
      logo: "fa-brands fa-node-js",
      level: "Beginner",
      count: 40,
    },
    {
      name: "PYTHON",
      logo: "logo-python",
      level: "Beginner",
      count: 45,
    },
    {
      name: "JAVA",
      logo: "fa-brands fa-java",
      level: "Beginner",
      count: 40,
    },
    {
      name: "AWS",
      logo: "fa-brands fa-aws",
      level: "Beginner",
      count: 30,
    },
    {
      name: "PHP",
      logo: "fa-brands fa-php",
      level: "Beginner",
      count: 30,
    },
    {
      name: "COBOL",
      logo: "fa fa-code",
      level: "Beginner",
      count: 40,
    },
 
  ];
  return (
    <section id="skills" className="py-10 bg-gray-100 Relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-8 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-4 rounded-xl"
            >
              <p className="text-xl mb-2">{skill.name}</p>
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  {skill.logo.startsWith("fa") ? (
                    <i className={skill.logo}></i>
                  ) : (
                    <ion-icon name={skill.logo}></ion-icon>
                  )}
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;