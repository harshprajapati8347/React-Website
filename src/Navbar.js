/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
// import app from "../src/images/h2.jpg";

function Navbar() {
  return (
    <>
      <div className="container-fluid nav_b1g">
        <div className="row">
          <div className="mx-auto">
            <nav className="nav navbar navbar-expand-lg navbar-light bg-light">
              <NavLink
                activeClassName="manu_active"
                className="navbar-brand"
                to="/"
              >
                Harsh Prajapati
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink
                      activeClassName="manu_active"
                      className="nav-link"
                      to="/"
                    >
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="manu_active"
                      className="nav-link"
                      to="/service"
                    >
                      Service
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeClassName="manu_active"
                      className="nav-link"
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeClassName="manu_active"
                      className="nav-link"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            {/* <section className="Landing">
              <img src={app} />
            </section> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
