'use client'

import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import New from './components/New'

const page = () => {
  return (
    <>
      <Header/>
      {/* <Hero/> */}
      <New/>
      <Categories/>
      <Reviews/>
      <Footer/>
    </>
  )
}

export default page