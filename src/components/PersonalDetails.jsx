import React from "react";

const PersonalDetails = ({ personaldata = {} }) => {
  return (
    <div className="grid grid-cols-[1fr_3fr] ">
      <h2 className="text-xl font-bold  pb-2 uppercase mr-6 text-gray-800">
        Personal Details
      </h2>
      <ul className="mt-3 text-gray-700 grid grid-cols-2 gap-y-2 leading-relaxed">
        {Object.entries(personaldata).map(([key, value]) => (
          <li key={key} className="flex">
            <span className="font-semibold capitalize mr-2">
              {key.replace(/([A-Z])/g, " $1").trim()}:
            </span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalDetails;
