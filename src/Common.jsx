import React from 'react'
import { NavLink } from 'react-router-dom'
const Common = (props) => {
  return (
    <>
      <section id='header' className = 'd-flex align-items-center'>
        <div className='container-fluid' >
          <div className='row' >
            <div className='col-10 mx-auto'   >
              <div className='row' >
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' >
                  <h1> {props.name} <strong className='brand-name'>Harsh Prajapati</strong></h1>
                  <h2 className='my-3'>
                  I am a Full-Stack Web Developer. I am expertizing in MERN stack (MongoDB,Expres.js,React.js And Node.js).I have active knowledge of HTML, CSS and JavaScript. I have experience of GitHub and Google Firebase for Code Hosting Platform and Community Colaboration . I also have experience of Git as Version Control Tool. I have prior knowledge of Python Language so that it can fill my curiousness in future for Learning AI , ML.
                </h2>
                  <div className='mt-3'>
                    <NavLink to={props.visit} className='btn-get-started'>{props.btn}</NavLink>
                  </div>
                </div>
                <div className='col-lg-6 order-1 order-lg-2 header-img' >
                  <img src={props.imgsrc} className='img-fluid animated ' alt='image not found' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Common
