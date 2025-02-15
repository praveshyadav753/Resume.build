import { Summary, Experience, Skills } from "./components/summary";
import Header from "./components/header";
import Experiencespage from "./components/experiencespage";
import Educationpage from "./components/Educationpage";
import Projectspage from "./components/Projectspage";
import CertificationPage from "./components/Pages/CertificationPage";
import Language from "./components/Pages/Language";
import Hobiespage from "./components/Pages/Hobiespage";
import Break from "./break";
const ResumeTemplate =()=>{
const resumeData = {
    name: "Pravesh Yadav",
    location: "Indore, Madhya Pradesh 452020",
    phone: "+91-6261508896",
    email: "praveshydv.p@gmail.com",
    linkedin: "https://www.linkedin.com/in/pravesh-yadav-36b611a1",
    github: "https://github.com/praveshyadav753",
    image: "./photo.jpg", // Replace with actual image URL
  };

  return (
    <>
      
      <div className="border m-auto w-[210mm] shadow-2xl">
        <div  className="p-5 w-[210mm] m-auto ">
          <Header {...resumeData} />
          <Break/>
          <Summary />
          <Break/>
          <Skills />
          <Break/>
          <Experiencespage />
          <Break/>
          <Educationpage />
          <Break/>
          <Projectspage />
          <Break/>
          <CertificationPage />
          <Break/>
          <Hobiespage />
          <Break/>
          <Language />
          <Break/>
        </div>
      </div>
      
    </>
  );
}

export default ResumeTemplate;