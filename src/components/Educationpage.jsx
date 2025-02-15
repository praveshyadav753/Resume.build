import React from 'react'
import {Education} from './education'
const educationData = [
    {
      institution: "Medi-Caps University",
      location: "Indore, Madhya Pradesh, India",
      duration: "Expected in 07/2025",
      degree: "B.Tech - Information Technology",
      cgpa: "8.3",
    },
    {
      institution: "Ideal Public School",
      location: "Indore",
      duration: "2021",
      degree: "12th",
      percentage: "84",
    },
    {
      institution: "Ideal Public School",
      location: "Dhar",
      duration: "2019",
      degree: "10th",
      percentage: "85",
    },
  ];
function Educationpage() {
  return (
    <div><Education  educationList={educationData}/></div>
  )
}

export default Educationpage