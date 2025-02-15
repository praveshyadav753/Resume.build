import React from "react";
import PersonalDetails from "../PersonalDetails";

const personaldata = {
  phone: "+91-6261568895",
  mail: "praveshydv.p@gmail.com",
  gender: "Male",
  dob: "03 Aug 2003",
  maritalStatus: "Single",
  nationality: "Indian",
  address: "Indore, Madhya Pradesh",
};

function PersonalDetPage() {
  return <PersonalDetails personaldata={personaldata} />;
}

export default PersonalDetPage;
