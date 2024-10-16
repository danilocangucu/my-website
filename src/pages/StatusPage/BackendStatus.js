import React, { useState } from "react";
import axios from "axios";

function BackendStatus({ status, projectName }) {
  const [isStartingInstance, setIsStartingInstance] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const startInstance = async () => {
    setIsStartingInstance(true);
    setErrorMessage("");

    // TODO error handling for missing REACT_APP_EC2_BACKEND_URL
    const ec2BackendUrl = process.env.REACT_APP_EC2_BACKEND_URL;
    console.log("ec2BackendUrl", ec2BackendUrl);
    // TODO error handling for missing projectName
    const requestBody = { projectName };
    console.log("requestBody", requestBody);

    try {
      const response = await axios.post(ec2BackendUrl, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // TODO Handle properly the response status
      // TODO Show a loading spinner while the request is being processed
      // TODO Show a success message if the request is successful
      // TODO Show an error message if the request fails
      // TODO Lambda should return 304 if the instance is already running
      if (response.status === 200) {
        alert("Instance is starting...");
      } else if (response.status === 304) {
        alert("Instance is already running.");
      } else {
        setErrorMessage("Failed to start the instance.");
      }
    } catch (error) {
      console.error("Error while starting the instance.", error);
      setErrorMessage("Error while starting the instance.");
      console.error(error);
    } finally {
      setIsStartingInstance(false);
    }
  };

  return (
    <div>
      {status === "Offline" && (
        <div>
          <button onClick={startInstance} disabled={isStartingInstance}>
            {isStartingInstance ? "Starting..." : "Start Instance"}
          </button>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
      )}
      <h3>Backend Status</h3>
      <p>
        The backend is currently <strong>{status}</strong>.
      </p>
    </div>
  );
}

export default BackendStatus;
