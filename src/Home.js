/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import "./Home.css"
import Common from "./Common"
import web from "../src/images/h1.jpg"


function Home() {
  return (
    <>
      <Common name='Grow Your Business With' imgsrc={web} visit="/service" btname='Get Started'  />


    </>
  )
}

export default Home
