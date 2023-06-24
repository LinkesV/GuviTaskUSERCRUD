import React from 'react'
import Nav from '../components/Nav'
import UserCreate from '../components/UserCreate'
import ListUsers from '../components/ListUsers'
import '../components/styles/Home.css'
function Home() {
  return (
    <div>
        <Nav/>
        <div className='userbox'> 
          <UserCreate/>
          <ListUsers/>
        </div>
        
    </div>
  )
}

export default Home