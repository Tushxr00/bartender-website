import React from "react";
import Banner from "./Banner";
import Mission from "./Mission";
import Graduates from "./Graduates";
import School from "./School";
import Courses from "./Courses";
import Benifits from "./Benifits";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Mission />
      <Benifits />
      <School />
      <Graduates />
      <Courses />
    </>
  );
};

export default HomePage;
