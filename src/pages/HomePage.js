import React from "react";
import { Link } from "react-router-dom";
import { About } from "../components/About";
import { FeaturedProject } from "../components/FeaturedProject";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";

export const HomePage = ({ projectCards }) => {
  return (
    <>
      <header className="container-fluid">
        <div className="row header justify-content-center align-items-center">
          <div className="col-12 mx-auto text-center">
            <h1 className="display-3">I am Dima Tokarev</h1>
            <h1 className="display-4 ">A Web Developer</h1>
            <p className="mb-5">Looking for a job</p>
            <Link to="/resume">My Resume</Link>
          </div>
          <a href="#featured" className="arrow">
            <i className="fa fa-chevron-down"></i>
          </a>
        </div>
      </header>
      <FeaturedProject />
      <About />
      <Projects projectCards={projectCards} />
      <Footer />
    </>
  );
};
