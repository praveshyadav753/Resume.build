import React from 'react'
import {Certifications} from "../certification"
const certifications = ["Python Programming", "C and C++ Programming","React js" ]

function CertificationPage() {
  return (
   < Certifications certifications={certifications}/>
  )
}

export default CertificationPage