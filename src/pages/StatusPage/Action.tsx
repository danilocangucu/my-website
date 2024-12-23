import React, { useState, useEffect } from "react";
import NumberFlow from "@number-flow/react";

import StartInstance from "./StartInstance";

interface ActionProps {
  backendStatus: string;
  subdomain: string;
  projectName: string;
  setIsLoading: (isLoading: boolean) => void;
  setBackendStatus: (status: string) => void;
  startProgressAnimation: () => void;
  stopProgressAnimation: () => void;
  setProgress: (progress: number) => void;
}

const Action: React.FC<ActionProps> = ({
  backendStatus,
  subdomain,
  projectName,
  setIsLoading,
  setBackendStatus,
  startProgressAnimation,
  stopProgressAnimation,
  setProgress,
}: ActionProps) => {
  // TODO think about it. now it's not working as it should.
  // the counter should not be resetted if the status stays the same
  // even if the sequence is: starting... -> ... -> starting...
  // "..." should not reset the counter if previously it was "starting..."
  const [startingCountdown, setStartingCountdown] = useState(30);

  useEffect(() => {
    if (backendStatus === "starting...") {
      const intervalId = setInterval(() => {
        setStartingCountdown((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);

      return () => clearInterval(intervalId);
    } else if (backendStatus !== "starting...") {
      setStartingCountdown(30);
    }
  }, [backendStatus]);

  return (
    <>
      {backendStatus === "offline." ? (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <strong>
            You can start this project by clicking on the button below:
          </strong>
          <StartInstance
            projectName={projectName}
            setIsLoading={setIsLoading}
            setBackendStatus={setBackendStatus}
            startProgressAnimation={startProgressAnimation}
            stopProgressAnimation={stopProgressAnimation}
            setProgress={setProgress}
          />
        </div>
      ) : backendStatus === "starting..." ? (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <em>
            <strong>
              It usually takes less than{" "}
              <NumberFlow value={startingCountdown} trend={false} /> seconds for
              <br />
              the instance to be running smoothly. Please wait!
            </strong>
          </em>
        </div>
        ) : backendStatus === "unavailable." ? (
          // TODO review the unavailable rendering on the page
          <div style={{ textAlign: "center", padding: "20px" }}>
            <em>
              <strong>
                Sorry! You can’t access or start this project right now.<br />
                  Please try again later.
              </strong>
            </em>
          </div>
      ) : (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <strong>Click below to view this project:</strong>
          <br />
              { /* TODO check how to clean the cached if the user has arrived here */}
              <a href={`https://${subdomain}`}>Let’s Go!</a>
        </div>
      )}
    </>
  );
}

export default Action;
