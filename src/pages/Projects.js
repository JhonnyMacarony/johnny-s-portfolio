import React from 'react'
import CommunityPage from '../projects/CommunityPage'
import ElMajico from '../projects/ElMajico'
import "./Project.css"

const Projects = () => {
  return (
    <div>
      <h2> My Projects </h2>
      <div className='projects'>
        <CommunityPage />
        <ElMajico />
      </div>
    </div>
  )
}

export default Projects