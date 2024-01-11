import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      logo: "logo-play",
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'Bhgawan Mahavir University, Surat',
      grades:'CGPA: 7.58',
      year: '2021-present',
      desc:"I am currently pursuing a Bachelor's degree in Information Technology at Bhgawan Mahavir University, Suart."
    },
    {
        logo: "logo-play",
        degree: 'GSEB(XII)-HSC',
        institution: 'Bhaktashram Ashramshala, Navsari',
        grades:'Grade: 70.1%',
        year: '2020-2021',
        desc:"I completed my class 12 high school education at Bhaktashram Ashramshala, Navsari, where I studied Science with PCM."
      },
    
  ];

  return (
    <div id="education" className="flex flex-col items-center py-10">
      <div className="text-4xl font-semibold text-primary mt-8">
      <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Education</span>
        </h3>
      </div>
      <div className="text-xl text-center max-w-lg text-secondary mt-4 mb-2">
         My educational details are as follows 
      </div>
      <div className="h-fit w-full p-4 bg-slate-700 ">
        {educationDetails.map((edu, index) => (
          <div key={index} className="relative mb-6">
            
            <div className="flex items-center mb-4">
            <ion-icon name={edu.play}></ion-icon>
             <div className="text-xl font-semibold">{edu.degree}</div>
            </div>
            <div className="text-lg text-gray-400">{edu.institution}</div>
            <div className="text-lg text-gray-400">{edu.grades}</div>
            <div className="text-lg text-gray-400">{edu.year}</div>
            <div className="text-lg text-gray-400 pt-2">{edu.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
