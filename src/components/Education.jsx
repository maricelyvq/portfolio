import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      logo: "logo-arrow",
      degree: 'Bachelor in Computer Science',
      institution: 'Universidad de Oriente, Venezuela',
      grades: '',
      year: ' [2002-2007]',
      desc: "I completed my Bachelor's degree in Computer Science at Universidad de Oriente, Venezuela.",
    
    },
    {
      logo: "logo-play",
      degree: 'App Development',
      institution: 'Npower,Usa',
      grades: '',
      year: ' [2024-2025]',
      desc: "I completed my class Path2Tech. App Development with Npower,Usa. ",       
    },
  ];

  return (
    <section id="education" className="bg-gray-100">
    <div className="container mx-auto px-4 py-12">
      <h3 className="text-4xl text-center font-semibold mb-1">
          My <span className="text-cyan-600">Education</span>
        </h3>
      <p className="text-lg text-center font-normal ">My educational details are as follows.</p>
      <hr className="border-gray-300 w-full mb-8" />
      <div>
        {educationDetails.map((edu, index) => (
          <div key={index} className="bg-gray-200 rounded-lg shadow-md p-6 flex flex-col items-start mb-4">
            <ion-icon name={edu.logo} class="text-primary text-xl mr-2" />
            <div className="text-lg font-medium mb-2 text-gray-700">{edu.degree}</div>
            <div className="flex-1">
              <div className="text-base text-gray-500">{edu.institution}</div>
              <div className="text-base text-gray-500">{edu.grades}</div>
              <div className="text-base text-gray-500">{edu.year}</div>
            </div>
            <p className="text-gray-700">{edu.desc}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Education;
