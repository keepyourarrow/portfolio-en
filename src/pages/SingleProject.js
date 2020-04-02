import React, { useEffect, useState } from "react";
import sushiBar from "../video/animated-sushi-bar.mp4";
import oneRoom from "../video/oneroom.mp4";
import restaraunt from "../video/restaraunt.mp4";
import sweets from "../video/sweets.mp4";
import { DisplaySingleProject } from "../components/DisplaySingleProject";
import { NoProjectFound } from "../components/NoProjectFound";

let projects = [
  {
    name: "One Room Hotel",
    slug: "one-room-hotel",
    video: oneRoom,
    made: "React.js, Html,Css and Bootstrap",
    site: "https://one-room-hotel.netlify.com/",
    description:
      "My biggest frontend project that was done with React.js. I'm using functional components, react-router for routing, Hooks and React Context to lift my state. The purpose of the site for a user is to find a room that he likes and order it. You can do basic things that a non-logined user can do, like viewing rooms, but you can only order one if you are registered." +
      "You can order only one room however. There is also an admin user that gives you extra tools like creating new room, deleting room or restoring everything",
    how: true
  },
  {
    name: "Sweets Shop",
    slug: "sweets-shop",
    video: sweets,
    made: "Html, Css, Javacsript and Bootstrap",
    site: "https://sweets-restaraunt.netlify.com/",
    description:
      "I tried to make the web page look neat and professional, with a simple white background.  And i added vanilla javascript to let user add to cart,remove and so the price and everything updates."
  },
  {
    name: "Sushi restaraunt",
    slug: "sushi-restaraunt",
    made: "Html, Css, Javacsript and Bootstrap",
    video: restaraunt,
    site: "https://responsive-restaraunt.netlify.com/",
    description:
      "In this project i tried to make the web page stick out by using pretty combination of colors, and different hover effects but not very annoying to the eyes. I used a bit of entrance animations in the header,sticky nav when you reach a certain position, " +
      "bootstrap cards for displaying our members and other things... As for javascript, i used vanilla javascript to make the modal open when you click on order online. Back to top button uses a bit of javascript where it detects when user scrolled enough, to display itself For the image gallery," +
      "I used magnificent popup libary to make it popup."
  },
  {
    name: "Animated Sushi Bar",
    slug: "animated-sushi-bar",
    made: "Html, Css, wow.js and Bootstrap",
    video: sushiBar,
    site: "https://sushi-restaraunt-animated.netlify.com/",
    description:
      "In this project i'm utilizing animation library wow.js and attempting to show a bit of a different approach to styling the web page."
  }
];

export const SingleProject = (props) => {
  const [projectList] = useState(projects);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let project = projectList.find(
    (project) => project.slug === props.match.params.slug
  );

  if (!project) {
    return <NoProjectFound />;
  }

  return (
    <div>
      <DisplaySingleProject project={project} />
    </div>
  );
};
