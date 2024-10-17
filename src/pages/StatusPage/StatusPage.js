import React from "react";
import { useLocation } from "react-router-dom";
import useBackendStatus from "../../hooks/useBackendStatus";
import EC2Explanation from "./EC2Explanation";
import StatusMessage from "./StatusMessage";
import ProjectInfo from "./ProjectInfo";
import Action from "./Action";

function StatusPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subdomain = queryParams.get("subdomain");
  const projectName = subdomain.split(".")[0] || "This project";
  const projectNameUpperCased =
    projectName.charAt(0).toUpperCase() + projectName.slice(1);
  const backendStatus = useBackendStatus(subdomain);

  const statusMessage = `${projectNameUpperCased} is: ${backendStatus}!`;

  return (
    <div className="padding-sides-10 padding-bottom-40">
      <StatusMessage statusMessage={statusMessage} />
      <div className="text-dark">
        <ProjectInfo
          projectNameUpperCased={projectNameUpperCased}
          backendStatus={backendStatus}
        />
        <Action
          backendStatus={backendStatus}
          subdomain={subdomain}
          projectName={projectName}
        />
        <EC2Explanation />
      </div>
    </div>
  );
}

export default StatusPage;
