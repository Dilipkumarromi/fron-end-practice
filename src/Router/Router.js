import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Component/Home/Home";
import Contact from '../Component/Contact/Contact'
import CourseDetails from '../Component/Course-details/Course_details'
export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Router path="/course-details" element={<CourseDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
