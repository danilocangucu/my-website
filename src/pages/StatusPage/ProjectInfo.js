import React from "react";

function ProjectInfo({ projectNameUpperCased, backendStatus }) {
  return (
    <div>
      <h2>Danilo, what's going on?!</h2>
      <p>
        This page checks the status of {projectNameUpperCased}. This project is
        hosted on an AWS EC2 Instance and{" "}
        {backendStatus === "Online" ? "is running" : "is not running"} right
        now.{" "}
        {backendStatus === "Offline" ? (
          <>
            You can, though, turn the project <strong>ON</strong> by clicking
            the button below!
          </>
        ) : null}
      </p>
    </div>
  );
}

export default ProjectInfo;
