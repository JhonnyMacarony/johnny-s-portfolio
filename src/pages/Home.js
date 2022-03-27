import React from 'react'
import ContactIcon from '../components/ContactIcon';
import CommunityPage from '../projects/CommunityPage';
import ElMajico from '../projects/ElMajico';
import './Home.css';


const Home = () => {
  return (
    <div className='main-div'>
      <div className='welcome-div'>
        <p className='animation-0'> Welcome to Johnny's portfolio.</p>
        <p className='animation-1'> Here you will find projects and sites made by Johnny.</p>
      </div>
      <ContactIcon />      
      <div className='projects-div'>
          <h2 className='title0' > Projects </h2>
              <div className='projects'>
                  <CommunityPage />
                  <ElMajico />
              </div>
      </div>
    </div>
  )
}

export default Home