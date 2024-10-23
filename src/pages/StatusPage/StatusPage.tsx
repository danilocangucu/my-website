import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import EC2Explanation from "./EC2Explanation";
import StatusMessage from "./StatusMessage";
import ProjectInfo from "./ProjectInfo";
import Action from "./Action";
import cloudsRain from "./clouds-rain.gif";

import {
  startProgressAnimation,
  stopProgressAnimation,
} from "../../utils/StatusPageUtils";

const StatusPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subdomain = queryParams.get("subdomain");
  const projectName = subdomain ? subdomain.split(".")[0] : "This project";
  const projectNameUpperCased =
    projectName.charAt(0).toUpperCase() + projectName.slice(1);

  const [progress, setProgress] = useState(100);
  const [isLoading, setIsLoading] = useState(false);
  const [backendStatus, setBackendStatus] = useState("...");

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

  const statusMessage = `${projectNameUpperCased} is ${backendStatus}`;

  return (
    <div className="padding-sides-10 padding-bottom-40">
      <StatusMessage
        statusMessage={statusMessage}
        isLoading={isLoading}
        progress={progress}
      />
      <div
        style={{
          marginTop: "-15px",
          textAlign: "left",
          height: "94px",
          width: "500px",
          color: "#CA2E55",
          display: "inline-block",
          border: "2px solid #CA2E55",
          borderRadius: "10px",
          backgroundColor: "#F8F8F8",
        }}
      >
        {isLoading ? (
          <div
            style={{
              width: "500px",
              height: "80px",
              overflow: "hidden",
              paddingLeft: "8px",
              marginTop: "7px",
            }}
          >
            <img
              src={cloudsRain}
              alt="Clouds gif"
              style={{
                maxWidth: "484px",
                transform: "translateY(-25px)",
                borderRadius: "10px",
              }}
            ></img>
          </div>
        ) : (
          <Action
            setBackendStatus={setBackendStatus}
            backendStatus={backendStatus}
            subdomain={subdomain || ""}
            projectName={projectName}
            setIsLoading={setIsLoading}
            startProgressAnimation={() => startProgressAnimation(setProgress, projectName, setBackendStatus, setIsLoading)}
            stopProgressAnimation={stopProgressAnimation}
            setProgress={setProgress}
          />
        )}
      </div>
      <div className="text-dark">
        <ProjectInfo
          projectNameUpperCased={projectNameUpperCased}
        />
        <EC2Explanation />
      </div>
    </div>
  );
}

export default StatusPage;
