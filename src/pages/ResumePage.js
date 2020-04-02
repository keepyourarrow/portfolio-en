import React from "react";
import Helmet from "react-helmet";
import resumeImg from "../img/resume.png";

export const ResumePage = () => {
  return (
    <div>
      <Helmet>
        <title>Welcome to my resume page</title>
      </Helmet>

      <div className="my-2 pt-5 resume">
        <img src={resumeImg} alt="resume" className="img-fluid" />
      </div>
    </div>
  );
};
