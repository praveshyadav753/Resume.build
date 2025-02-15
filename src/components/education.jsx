export const Education = ({ educationList }) => {
    return (
      <div className="grid grid-cols-[1fr_3fr] ">
        <h2 className="text-xl font-bold border-b-3 border-b-gray-500 mr-6 pb-2 uppercase text-gray-800 ">
          Education 
        </h2>
        <div className="pb-4">
          {educationList.map((edu, index) => (
            <div
              key={index}
              className={`mb-4 pb-2 ${index !== educationList.length - 1 ? "border-dashed border-b" : ""}`}
            >
              <h3 className="font-bold italic">
                {edu.institution}, {edu.location}{" "}
                <span className="text-gray-500 text-sm ml-2">{edu.duration}</span>
              </h3>
              <p className="font-semibold">{edu.degree}</p>
              <p className="text-gray-600">
                {edu.cgpa ? `CGPA: ${edu.cgpa} / 10` : `Percentage: ${edu.percentage}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  