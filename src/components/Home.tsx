import React from "react";

import Intro from "./Intro";
import Bio from "./Bio";
import SelectedProjects from "./SelectedProjects";
import Skills from "./Skills";

const Home: React.FC = () => {
  const animStr = () =>
    `fadeIn 1000ms ease-out ${1000 * Math.random()}ms forwards`;

  const ArrowDown = () => {
    const arrowDown = document.getElementsByClassName("arrow-down");
    setTimeout(() => {
      (arrowDown[0] as HTMLElement).style.animation = animStr();
    }, 1500);
    return <div className="arrow-down">↓</div>;
  };

  return (
    <div className="body-home">
      <Intro />
      <ArrowDown />
      <Bio />
      <SelectedProjects />
      <Skills />
    </div>
  );
};

export default Home;
