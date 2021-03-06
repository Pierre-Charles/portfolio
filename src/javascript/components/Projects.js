import React, { useState, useEffect } from 'react'
import Project from './Project'
import projectDesc from '../projectDescription'
import sr from '../ScrollReveal'

export default function Experience() {
  const projects = Object.values(projectDesc)

  useEffect(() => {
    sr.func.reveal('.projects', sr.config)
  })

  return (
    <div className='projects height mx-4'>
      <h1 className='heading pb-5'>Recent projects</h1>
      {projects.map(project => (
        <Project key={project.name} params={project} />
      ))}
    </div>
  )
}