import React from "react";

export const Summary = () => {
  return (
    <div className="grid grid-cols-[1fr_3fr] ">
      <h2 className="text-xl font-bold pb-2 uppercase text-gray-800 border-b-3 mr-6 border-b-gray-500">
        Summary
      </h2>
      <p className=" text-gray-700 text-justify leading-relaxed pb-4">
      Detail-oriented React Developer with full-stack expertise in building scalable applications. Proficient in React.js, Python, Django,  with strong skills in RESTful APIs and JWT authentication. Focused on performance optimization, modern UI frameworks like Tailwind CSS, and deployment on Vercel/Railway.
      </p>
    </div>
  );
};

export const Skills = () => {
    const skills = [
        "Python",
        "Tailwind",
        "React.js",
        "Django",
        "MySQL",
        "REST",
        "JavaScript",
        "C++",
        "HTML",
        "Git",
        "CSS",
        "DSA",
      ]; 
  return (
    <div className="grid grid-cols-[1fr_3fr]  ">
      <h2 className="text-xl font-bold pb-2 uppercase text-gray-800 border-b-3 border-b-gray-500 mr-6">Skills</h2>
      <ul className="grid grid-cols-2 gap-y-2 text-gray-700 font-medium list-disc list-inside pb-4">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export const Experience = ({
  title,
  company,
  duration,
  location,
  bulletPoints,
}) => {
  return (
    <div className=" flex  space-x-6  pb-4 ">
      <div className="flex flex-col items-start">
        <h3 className="font-bold text-lg">
          {title}
          <span className="text-gray-500 text-sm ml-2">{duration}</span>
        </h3>
        <p className="text-gray-600 font-medium">
          {company}, {location}
        </p>
        <ul className="list-disc ml-6 mt-2 flex flex-col items-start text-gray-700 leading-relaxed">
          {bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
