import React from "react";
import { VideoPlayer } from "./VideoPlayer";

export const DisplaySingleProject = ({ project }) => {
  return (
    <section className="single-project">
      <h1 className="mx-auto project-name"> {project.name}</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-12  mx-auto mt-5">
            <VideoPlayer video={project.video} />
          </div>
          <div className="col-lg-6 col-sm-10 mx-auto project-description">
            <h5 className="pb-4">
              Made with: <strong>{project.made}</strong>
            </h5>
          </div>
          <div className="col-10 mx-auto pb-5 mb-5">
            <h4 className="pb-3">Project Description</h4>
            <p className="desc">
              {project.description}. <br />
              You can view the site{" "}
              <a href={project.site} target="_blank" rel="noopener noreferrer">
                here...
              </a>
            </p>
          </div>
          {project.how !== undefined && (
            <div className="col-10 mx-auto p-4">
              <h4 className="pb-4 pt-4 mt-3">How to start</h4>
              <ul>
                <li>Start with populate data.</li>
                <li>
                  You can create a new username, but if you want to use existing
                  ones:
                </li>
                <li>admin admin for admin</li>
                <li>normaluser normaluser for normal user</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
