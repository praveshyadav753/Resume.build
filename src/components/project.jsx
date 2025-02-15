export const Projects = ({ projects }) => {
  return (
    <div className="grid grid-cols-[1fr_3fr]">
      <h2 className="text-xl font-bold border-b-3 border-gray-500 mr-6 pb-2 uppercase text-gray-800">
        Projects
      </h2>
      <div className="pb-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`mb-4 pb-2 ${index !== projects.length - 1 ? "border-b border-dashed" : ""}`}
          >
            <h3 className="font-bold text-lg">{project.name}</h3>
            <p className="text-gray-600 font-medium">{project.technology}</p>
            <ul className="list-disc ml-6 mt-2 text-gray-700 leading-relaxed">
              {project.bulletPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="mt-2 flex flex-col  ">
              {project.links.map((link, i) => (
                <div className="flex gap-2">
                <span> {link.linkTitle}: </span>
                <a
                  key={i}
                  className="text-blue-500 underline"
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.link}
                </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
