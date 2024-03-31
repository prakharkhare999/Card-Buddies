import React from 'react'
import Header from './components/Navbar'
import MyServices from './components/Services' // Assuming this is your Services component
import CustomFooter from './components/Footer' // Renamed the second Footer component to CustomFooter
import MyFaqs from './components/Faqs'
import MyHowItWork from './components/How_Its-works'
import MyBenefits from './components/Benefits'
import { Outlet } from 'react-router-dom'

function App() {
  
  return (
    <>
    <Header/>
    
    <Outlet />
    <MyServices/>
    <MyHowItWork/> 
    <MyBenefits/>
   <MyFaqs/>
   
    <CustomFooter /> {/* Use the renamed CustomFooter component here */}
     
    </>
  )
}

export default App
