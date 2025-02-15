export const Languages = ({ languages }) => {
    return (
      <div className=" grid grid-cols-[1fr_3fr] border-t pt-2">
        <h2 className="text-xl font-bold border-b-3 border-b-gray-500 mr-6 pb-2  uppercase text-gray-800">Languages</h2>
        <p className="text-gray-700 ">{languages.join(", ")}</p>
      </div>
    );
  };