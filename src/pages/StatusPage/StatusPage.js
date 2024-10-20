import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import EC2Explanation from "./EC2Explanation";
import StatusMessage from "./StatusMessage";
import ProjectInfo from "./ProjectInfo";
import Action from "./Action";

import { startProgressAnimation } from "../../utils/StatusPageUtils";

function StatusPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subdomain = queryParams.get("subdomain");
  const projectName = subdomain.split(".")[0] || "This project";
  const projectNameUpperCased =
    projectName.charAt(0).toUpperCase() + projectName.slice(1);

  const [progress, setProgress] = useState(100);
  const [isLoading, setIsLoading] = useState(false);
  const [backendStatus, setBackendStatus] = useState("Checking status...");

  useEffect(() => {
    const clearCountdownInterval = startProgressAnimation(
      setProgress,
      projectName,
      setBackendStatus,
      setIsLoading
    );

    return () => {
      clearCountdownInterval();
    };
  }, [projectName]);

  const statusMessage = `${projectNameUpperCased} is: ${backendStatus}`;

  return (
    <div className="padding-sides-10 padding-bottom-40">
      <StatusMessage
        statusMessage={statusMessage}
        isLoading={isLoading}
        progress={progress}
      />
      <div
        style={{
          textAlign: "center",
          height: "30px",
        }}
      >
        {isLoading ? (
          <div className="text-dark">
            <em>Wait until the status is checked!</em>
          </div>
        ) : (
          <Action
            backendStatus={backendStatus}
            subdomain={subdomain}
            projectName={projectName}
          />
        )}
      </div>
      <div className="text-dark">
        <ProjectInfo
          projectNameUpperCased={projectNameUpperCased}
          backendStatus={backendStatus}
        />
        <EC2Explanation />
      </div>
    </div>
  );
}

export default StatusPage;
