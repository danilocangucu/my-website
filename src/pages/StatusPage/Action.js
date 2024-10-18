import React from "react";
import StartInstance from "./StartInstance";

function Action({ backendStatus, subdomain, projectName }) {
  return (
    <>
      {backendStatus === "Offline." ? (
        <StartInstance projectName={projectName} />
      ) : (
        <a href={`https://${subdomain}`}>Go to Project</a>
      )}
    </>
  );
}

export default Action;
