export const HobbiesAndInterests = ({ hobies }) => {
    return (
      <div className=" grid grid-cols-[1fr_3fr] ">
        <h2 className="text-xl font-bold border-b-3 border-b-gray-500 mr-6 pb-2 uppercase text-gray-800">Hobbies & Interests</h2>
        <p className="text-gray-700 mt-3 pb-4">{hobies.join(", ")}</p>
      </div>
    );
  };