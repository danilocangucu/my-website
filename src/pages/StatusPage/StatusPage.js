import React from "react";
import { useLocation } from "react-router-dom";
import useBackendStatus from "../../hooks/useBackendStatus";
import BackendStatus from "./BackendStatus";
import EC2Explanation from "./EC2Explanation";

function StatusPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subdomain = queryParams.get("subdomain");
  const projectName = subdomain.split(".")[0] || "This project";

  const backendStatus = useBackendStatus(subdomain);

  const statusMessage = `${
    projectName.charAt(0).toUpperCase() + projectName.slice(1)
  } is: ${backendStatus}!`;

  return (
    <div className="padding-sides-10 padding-bottom-40">
      <h1>{statusMessage}</h1>
      <div className="text-dark">
        <h2>What is going on?</h2>
        <p>
          This project is hosted on an AWS EC2 Instance and{" "}
          {backendStatus === "Online" ? "is running" : "is not running"} right
          now.{" "}
          {backendStatus === "Offline" ? (
            <>
              You can, though, turn the project <strong>ON</strong> by clicking
              the button below!
            </>
          ) : null}
        </p>

        <BackendStatus status={backendStatus} projectName={projectName} />
        <EC2Explanation />
      </div>
    </div>
  );
}

export default StatusPage;
