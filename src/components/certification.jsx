export const Certifications = ({ certifications }) => {
    return (
      <div className="grid grid-cols-[1fr_3fr] pt-2 ">
        <h2 className="text-xl font-bold border-b-3 border-b-gray-500 mr-6 pb-2 uppercase text-gray-800">Certifications</h2>
        <ul className="list-disc ml-6  text-gray-700 leading-relaxed">
          {certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>
    );
  };