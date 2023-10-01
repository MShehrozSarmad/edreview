'use client'

import React from 'react'
import { ThemeProvider } from "@material-tailwind/react";
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import Internships from './components/Internships'
import Courses from './components/Courses';



const page = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Categories/>
      <Reviews/>
      <Internships/>
      <Courses/>
      <Footer/>
    </>
  )
}

export default page