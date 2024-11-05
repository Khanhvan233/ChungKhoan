import React, { useEffect } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Home.css'
const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className='homeContainer'>container</div>
    </div>
  )
}

export default Home