import React, { useRef } from 'react'
// import { useTheme } from 'styled-components'
import ProjectDetails from './projectDetails'
import Project from './Project'

export default function CaseStudies(props) {

  const projects = ProjectDetails.map(item => {
    return (
      <Project
        key={item.id}
        proj={item}
      />
    )
  })

  return (
    <div className='section-2' ref={props.projectss}>
      <div className="head">
        <div className="mycaseStudies">
          <div id='latest-works'> LATEST WORKS </div>
          <div className="caseStudies"> My Case Studies </div>
        </div>
        <div className='all-case-studies'> ALL CASE STUDIES </div>
    </div>
    {projects}
    </div>
  )
}
