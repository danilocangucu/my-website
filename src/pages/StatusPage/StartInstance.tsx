import React, { useState } from "react";
import axios from "axios";

import { ec2BackendUrl } from "../../utils/StatusPageUtils";


const StartInstance = ({
  // @ts-ignore
  projectName,
  // @ts-ignore
  setIsLoading,
  // @ts-ignore
  setBackendStatus,
  // @ts-ignore
  setProgress,
  // @ts-ignore
  startProgressAnimation,
  // @ts-ignore
  stopProgressAnimation,
}) => {
  const [isStartingInstance, setIsStartingInstance] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const startInstance = async () => {
    setIsStartingInstance(true);
    setErrorMessage("");
    setIsLoading(true);
    stopProgressAnimation();

    // TODO error handling for missing projectName
    const requestBody = { projectName };

    try {
      const response = await axios.post(ec2BackendUrl, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // TODO check how the error message is being
      // TODO Lambda should return 304 if the instance is already running
      if (response.status === 200) {
        setBackendStatus("starting...");
      } else {
        setErrorMessage("Failed to start the instance.");
      }
    } catch (error) {
      console.error("Error while starting the instance.", error);
      if (axios.isAxiosError(error) && error.response && error.response.status === 409) {
        setErrorMessage("Instance is already running.");
      } else {
        setErrorMessage("Error while starting the instance.");
      }
    } finally {
      setIsStartingInstance(false);
      setIsLoading(false);
      setProgress(0);
      startProgressAnimation(
        setProgress,
        projectName,
        setBackendStatus,
        setIsLoading
      );
    }
  };

  return (
    <div>
      <button onClick={startInstance} disabled={isStartingInstance}>
        {isStartingInstance ? "Starting..." : "Start Instance"}
      </button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}

export default StartInstance;
