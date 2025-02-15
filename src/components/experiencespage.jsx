import React from 'react'
import { Experience } from './summary';
const experiences = [
    {
      title: "MERN Stack Developer Intern",
      company: "Annova Solutions",
      duration: "01/2024 - Present",
      location: "Indore, India",
      bulletPoints: [
       "Constructed responsive service booking and registration interfaces utilizing React.js for enhanced user experience.",
"Developed RESTful APIs to ensure secure data management.",
"Managed service data storage and retrieval using Mysql.",
"Utilized Redux toolkit for efficient state management.",
"Established robust login security with JWT/Auth0 integration.",
"Utilized Git and GitHub for efficient version control."
      ],
    },
    {
      title: " IBM SkillsBuild Internship",
      company: "IBM ",
      duration: " 12-06-2023 to 24-07-2023 ",
      location: "Remote",
      bulletPoints: [
        "Developed a project using HTML, CSS, and JavaScript, focusing on responsive and user-friendly design.",
        "Utilized JavaScript DOM manipulation to create interactive web elements",
        "Completed IBM SkillBuild training modules, improving frontend development expertise."
      ],
    }
  ];

export default function Experiencespage() {
  return (
    <div className="grid grid-cols-[1fr_3fr] pb-0 bt-2">
          <h2 className="text-xl font-bold  border-b-3 border-gray-500  pb-2 uppercase text-gray-800 mr-6">Experience</h2>
          <div>
          {experiences.map((exp, index) => (
            <Experience key={index} {...exp} />
          ))}
          </div>
        </div>
  )
}
