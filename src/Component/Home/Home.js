import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Banner from '../Banner/Banner'
import Courses from '../Courses/Courses'
import Course_details from '../Course-details/Course_details'

export default function Home() {
  return (
    <>
    <Header/>
    <Banner/>
    <Courses/>
    <Course_details/>
    <Footer/>
    </>
  )
}
