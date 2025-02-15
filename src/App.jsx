import "./App.css";
import { useRef } from "react";
import Resume from "./ResumeTemp1";
import { useReactToPrint } from "react-to-print";

import { Summary, Experience, Skills } from "./components/summary";
import Header from "./components/header";
import Experiencespage from "./components/experiencespage";
import Educationpage from "./components/Educationpage";
import Projectspage from "./components/Projectspage";
import CertificationPage from "./components/Pages/CertificationPage";
import Language from "./components/Pages/Language";
import Hobiespage from "./components/Pages/Hobiespage";
import Break from "./break";
import PersonalDetPage from "./components/Pages/PersonalDetPage";

const resumeData = {
  name: "Pravesh Yadav",
  location: "Indore, Madhya Pradesh 452020",
  phone: "+91-6261568895",
  email: "praveshydv.p@gmail.com",
  linkedin: "https://www.linkedin.com/in/pravesh-yadav-36b611a1",
  github: "https://github.com/praveshyadav753",
  image: "./photo.jpg", // Replace with actual image URL
};

function App() {
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "Resume_PDF",
  });

  return (
    <>

      <div className="border m-auto w-full sm:w-[210mm] shadow-2xl ">
        <div ref={componentRef} className="p-5 pt-0 w-[210mm] m-auto ">
          <div className="mb-3">
          <div className="relative w-full h-[20px] bg-emerald-950 overflow-visible">
            {/* Triangle extending outside */}
            <div
              className="absolute -bottom-[15px] left-40 w-0 h-0 
                  border-l-[15px] border-l-transparent 
                  border-r-[15px] border-r-emerald-950 
                  border-t-[15px] border-t-transparent 
                  border-b-[15px] border-b-transparent"
            ></div>
          </div>
          </div>

          <Header {...resumeData} />
          <Break />
          <Summary />
          <Break />
          <Skills />
          <Break />
          <Experiencespage />
          <Break />
          <Educationpage />
          <Break />
          <Projectspage />
          <Break />
          <CertificationPage />
          <Break />
          <Hobiespage />
          <Break />
          <Language />
          <Break />
          <PersonalDetPage/>
        </div>
      </div>

      <button
        onClick={() => handlePrint()}
        className="mb-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded"
      >
        Download as PDF
      </button>
    </>
  );
}
export default App;
// // import React, { useRef } from "react";
// import { useReactToPrint } from "react-to-print";
// import React,{useRef} from "react";

// const App = () => {
//   const componentRef = useRef(); // Better naming: componentRef

//   const handlePrint = useReactToPrint({
//      // Correct: Returns the ref's current value
//     documentTitle: "Printed_Document",
//   });

//   return (
//     <div className="p-4">
//       <div ref={componentRef} className="p-4 border bg-white shadow-lg"> {/* Ref is attached here */}
//         <h1 className="text-xl font-bold">This is a Printable Section</h1>
//         <p>This content will be printed when you click the button.</p>
//       </div>

//       <button onClick={() => handlePrint()} className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded">
//         Print this Section
//       </button>
//     </div>
//   );
// };

// export default App;
