'use client'

import React from 'react'
import { ThemeProvider } from "@material-tailwind/react";
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import New from './components/New'
import Internships from './components/Internships'
// import Slider1 from './components/Slider1'
// import { CarouselCustomNavigation } from './components/Slider1';
import IndItem from './components/IndItem';
import Courses from './components/Courses';



const page = () => {
  return (
    <>
    <ThemeProvider>
      <Header/>
      {/* <Hero/> */}
      <New/>
      <Categories/>
      <Reviews/>
      <Internships/>
      <IndItem/>
      <Courses/>
      <Footer/>
    </ThemeProvider>
    </>
  )
}

export default page