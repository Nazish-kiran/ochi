import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'


const page = () => {
  return (
    <>
    <div className="h-screen w-full ">
      <Navbar/>
      <LandingPage/>
      <Marquee/>
    </div>
    </>
  )
}

export default page