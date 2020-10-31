import React from 'react'
import Common from './Common'
import img1 from './images/img1.png'
const About = () => {
    return (
        <>
         <Common
         imgsrc = {img1}
         name = 'Welcome to About Page'
         btn = 'Contact Now'
         visit = './contact'
          />
        </>
    )
}

export default About
