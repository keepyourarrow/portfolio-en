import React, { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ResumePage } from "./pages/ResumePage";
import { SingleProject } from "./pages/SingleProject";
import { Navbar } from "./components/Navbar";
import oneRoom from "./img/oneroom-img.png";
import restaraunt from "./img/restaraunt-img.png";
import grandma from "./img/grandma-img.png";
import sushibar from "./img/sushibar-img.png";

const cardProjects = [
  {
    id: 1,
    image: oneRoom,
    name: "One Room Hotel",
    slug: "one-room-hotel",
    description:
      "React.js SPA where you can order One Room...(read more for video)",
    site: "https://one-room-hotel.netlify.com/",
    github: "https://github.com/keepyourarrow/One-Room-Hotel"
  },
  {
    id: 2,
    image: restaraunt,
    name: "Sushi Restaraunt",
    slug: "sushi-restaraunt",
    description:
      "A nice looking page with a few cool features...(read more for video)",
    site: "https://responsive-restaraunt.netlify.com/",
    github: "https://github.com/keepyourarrow/responsive_restaraunt"
  },
  {
    id: 3,
    image: grandma,
    name: "Sweets Shop",
    slug: "sweets-shop",
    description:
      "Normal, casual style with vanila javascript for cart...(read more for video)",
    site: "https://sweets-restaraunt.netlify.com/",
    github: "https://github.com/keepyourarrow/grandma-sweets"
  },
  {
    id: 4,
    image: sushibar,
    name: "Animated Sushi Bar",
    slug: "animated-sushi-bar",
    description:
      "Pure CSS with Wow.js library for animations...(read more for video)",
    site: "https://sushi-restaraunt-animated.netlify.com/",
    github: "https://github.com/keepyourarrow/sushi_restaraunt_animated"
  }
];

function App() {
  let [projectCards] = useState(cardProjects);
  return (
    <>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <HomePage projectCards={projectCards} />}
        />
        <Route exact path="/resume" component={ResumePage} />
        <Route exact path="/:slug" component={SingleProject} />
      </Switch>
    </>
  );
}

export default App;
