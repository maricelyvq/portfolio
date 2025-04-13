import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      logo: "school-sharp",
      degree: 'Bachelor in Computer Science',
      institution: 'Universidad de Oriente, Venezuela',
      grades: 'Equivalent GPA 3.0',
      year: ' [2002-2007]',
      desc: "Earned a Bachelor’s degree in Computer Science, gaining a strong foundation in software development, algorithms, data structures, databases, and system administration. Developed problem-solving skills through hands-on projects, programming, and system analysis. "
    
    },
    {
      logo: "school-sharp",
      degree: 'App Development',
      institution: 'Npower,Usa',
      grades: '',
      year: ' [2024-2025]',
      desc: "Gained hands-on experience in full-stack application development, focusing on designing, building, and deploying web applications. Worked with front-end and back-end technologies such as HTML, CSS, JavaScript, React, Node.js, and databases to develop functional and user-friendly applications. Applied problem-solving skills, Agile methodologies, and version control (Git/GitHub) to collaborate on projects. Enhanced knowledge in UI/UX principles, API integration, and cloud deployment. ",       
    },
    {
      logo: "school-sharp",
      degree: 'IBM Z/OS Mainframe Pre-Apprenticeship',
      institution: 'Franklin Skills,Usa',
      grades: '',
      year: ' [2022-2023]',
      desc: "Completed 105+ hours of hands-on training in IBM z/OS system fundamentals, gaining skills in TSO/ISPF, JCL, RACF, system utilities, and mainframe operations. Developed an understanding of enterprise computing, security protocols, and job scheduling while working with real-world mainframe environments. Strengthened problem-solving abilities and learned best practices for system administration, batch processing, and automation. Engaged with the IBM New to Z community to expand industry knowledge and professional networking.",       
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
            <ion-icon name={edu.logo} style={{color:'black'}} class="text-primary text-xl mr-2" />
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
