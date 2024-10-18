import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function StatusMessage({ statusMessage, isLoading, progress }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1>{statusMessage}</h1>
      <div
        style={{
          width: "30px",
          height: "30px",
          position: "relative",
        }}
      >
        {!isLoading ? (
          <CircularProgressbar
            value={progress}
            text={undefined}
            styles={buildStyles({
              pathColor: "#3e98c7",
              trailColor: "#f0f0f0",
              strokeWidth: 10,
              pathTransitionDuration: 0.5,
            })}
          />
        ) : (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              animation: "spin 1s linear infinite",
            }}
          >
            <CircularProgressbar
              value={25}
              text={undefined}
              styles={buildStyles({
                pathColor: "#3e98c7",
                trailColor: "#f0f0f0",
                strokeWidth: 10,
                pathTransitionDuration: 0.5,
              })}
            />
          </div>
        )}
      </div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default StatusMessage;
