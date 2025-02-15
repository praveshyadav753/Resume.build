import React from 'react'
import {Languages} from '../Language'

const languages=["Hindi","English"];

function Language() {
  return (
    <Languages languages={languages}/>
  )
}

export default Language