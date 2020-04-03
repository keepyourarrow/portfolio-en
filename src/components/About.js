import React from "react";

export const About = () => {
  return (
    <section className="about-section p-5">
      <div className="container ">
        <div className="row">
          <div className="col-lg-5 col-sm-12 about-content mr-4">
            <h3>About me </h3>
            <p>Hi, I'm Dima!</p>
            <p>
              I live in Uzbekistan, Tashkent, I've been studying in New York for
              8 years (high school and college), but now I'm back home
            </p>
            <p>
              I still remember that day where I decided to download a
              programming app on my phone, just for the fun of it. A few hours
              later I was like "hmm, that's not bad, I wanna do more".
            </p>
            <p>
              And then after finding the new way to spend time, I started to
              learn and more and more every day and eventually gotten to build
              new projects. I'm still nowhere near as good as I want to be, but
              I realize that you never know it all, you can always learn
              something new, you can always get better, every time you go to
              bed, you'd think, "I've gotten better, I'm improving..." and that
              is possibly one of the main reasons why the whole coding appeals
              to me. That and also the level of complexity and challenge and
              competition it provides. I feel like I've found something that
              fits me.
            </p>
            <p>I'm currently looking for a job and open to opportunities</p>
            <a href="#contact" className="links link-3">
              Contact me
            </a>
          </div>
          <div className="col-lg-5 col-sm-12 mx-auto about-content ml-5 pl-5 skills">
            <h3>Skills</h3>
            <ul>
              <li>
                <h6>Html, Css, Javascript, React, Bootstrap, Jquery</h6>
              </li>
              <li>
                <h6>Node.js, Express,Mongodb</h6>
              </li>
              <li>
                <h6>Python + Django</h6>
              </li>
              <li>
                <h6>Proficient with Bash Terminal and Bash language</h6>
              </li>
              <li>
                <h6>
                  Knowledge in Information Security. Security monitoring with
                  Wireshark
                </h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
