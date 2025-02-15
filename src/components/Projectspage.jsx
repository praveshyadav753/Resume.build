import React from 'react'
import {Projects} from './project'

const projectData = [
  {
    name: "SmartBites",
    technology: "React.js, Django ,Python ,jwt Authentication,REST api",
    bulletPoints: [
      "Developed a mobile web application that provides nutrition facts, ingredient details, and health ratings for products.",
      "Implemented a barcode scanning feature to fetch product details instantly.",
      "Designed a personalized recommendation system based on user preferences",
      "Built a Django-powered backend with structured data storage and retrieval.",
      "Established robust login security with JWT/Auth0 integration.",
      "Created a responsive UI with React.js & CSS for seamless user experience"
    ],
    links: [
      {
        link: "https://github.com/praveshyadav753/smartbites",
        linkTitle: "Github"
      },
      {
        link: "https://smartbites-alpha.vercel.app/",
        linkTitle: "Live Site"
      }
    ]
  },
    {
      name: "ParkIt",
      technology: "HTML, CSS, javascript, EasyOCR, YOLOv5",
      bulletPoints: [
        "Developed a web-based car parking management system that automates parking operations",
        "Integrated real-time monitoring and a dashboard for administrators to track occupancy rates and manage parking spaces.",
        "Implemented surveillance camera integration for live video feeds, enhancing security.",
        "Utilized car and number plate detection with EasyOCR for automatic parking slot allocation, ticket generation and track parking history"
      ],
      links: [
        {
          link: "https://github.com/praveshyadav753/advance-parking-management-system",
          linkTitle: "Github"
        }
      ]
    }
  ];

function Projectspage() {
  return (
    <Projects projects={projectData} />
  )
}

export default Projectspage