import React from "react";
import Common from "./Common";
import web from "../src/images/h8.jpg";


function About() {
  return (
    <>
      <Common
        name="Welcome to about page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
}

export default About;
