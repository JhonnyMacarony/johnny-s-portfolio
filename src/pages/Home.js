import React from 'react'
import CommunityPage from '../projects/CommunityPage';
import ElMajico from '../projects/ElMajico';
import './Home.css';


const Home = () => {
  return (
    <div className='main-div'>
        <h3> On this webpage you can see and visit all Johnny's work </h3>
        <div className='projects-div'>
            <h2 className='title0' > Projects </h2>
                <CommunityPage />
                <ElMajico />
        </div>
    </div>
  )
}

export default Home