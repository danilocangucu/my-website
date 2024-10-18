import React from "react";

function ProjectInfo({ projectNameUpperCased }) {
  return (
    <div>
      <h2>Danilo, what's going on?!</h2>
      <p>
        This page checks the status of {projectNameUpperCased}. This project is
        hosted on an AWS EC2 Instance and not always is online.
      </p>
    </div>
  );
}

export default ProjectInfo;
