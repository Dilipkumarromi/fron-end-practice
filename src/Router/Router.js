import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Component/Home/Home";
import Contact from "../Component/Contact/Contact";
import CourseDetails from "../Component/Course-details/Course_details";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";

export default function Router() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course-details/:course_id" element={<CourseDetails />} />
      </Routes>
     <Footer/>
    </>
  );
}
