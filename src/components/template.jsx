import React from "react";
import { forwardRef } from "react";
const Resume = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 border">
      <div className="flex  border-b pb-4">
        <img
          src="/photo.jpg"
          alt="Profile"
          className="w-24 h-24  mr-4"
        />
        <div>
          <h1 className=" font-bold text-gray-600">PRAVESH YADAV</h1>
          <p className="text-gray-600">Indore, Madhya Pradesh 452020</p>
          <p className="text-gray-600">+91-6261566985</p>
          <p className="text-blue-500 underline">praveshydv.p@gmail.com</p>
          <div className="flex space-x-2 mt-2">
            <a href="https://www.linkedin.com/in/praveshyadav-64618114b" className="text-blue-600 underline">LinkedIn</a>
            <a href="https://github.com/praveshyadav753" className="text-blue-600 underline">GitHub</a>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold border-b pb-2">SUMMARY</h2>
        <p className="mt-2 text-gray-700">
          Detail-oriented React Developer with practical experience in full-stack
          web development. Proficient in React.js, Python, Django, and MongoDB,
          with a solid understanding of RESTful APIs and JWT authentication.
        </p>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold border-b pb-2">SKILLS</h2>
        <div className="grid grid-cols-2 gap-2 mt-2 text-gray-700">
          <span>Python</span>
          <span>Tailwind</span>
          <span>React.js</span>
          <span>Django</span>
          <span>MySQL</span>
          <span>REST</span>
          <span>JavaScript</span>
          <span>C++</span>
          <span>HTML</span>
          <span>Git</span>
          <span>CSS</span>
          <span>DSA</span>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold border-b pb-2">EXPERIENCE</h2>
        <div className="mt-2">
          <h3 className="font-semibold">MERN STACK DEVELOPER INTERN</h3>
          <p className="text-gray-600">Anovus Solutions, Indore, India (01/2024 - Present)</p>
          <ul className="list-disc ml-5 mt-1 text-gray-700">
            <li>Constructed responsive service booking and registration interfaces.</li>
            <li>Developed RESTful APIs ensuring data security.</li>
            <li>Implemented JWT authentication for secure access.</li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default Resume;
