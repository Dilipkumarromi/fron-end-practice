import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import Courses from "../Courses/Courses";
import Top_institution_list from "../Top_institution_list/Top_institution_list";

export default function Home() {
  return (
    <>
      <Banner />
      <Courses />
      <Top_institution_list/>
    </>
  );
}
