import React from "react";
import { useLocation } from "react-router-dom";

function StatusPage() {
  // TODO do not allow users to come to this page without a valid subdomain
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  // TODO "This project" is a temporary solution
  const subdomain =
    queryParams.get("subdomain")?.split(".")[0] || "This project";

  const statusMessage = `${
    subdomain.charAt(0).toUpperCase() + subdomain.slice(1)
  } is currently Offline.`;

  return (
    // TODO better styling
    // TODO better explanation
    // TODO the actual functionality to turn the project ON
    <div>
      <h1>{statusMessage}</h1>
      <h2>What is going on?</h2>
      <p>
        This project is hosted on an AWS EC2 Instance and is not running right
        now. You can, though, turn the project ON in this page. Keep reading!
      </p>
      <h3>What is an AWS EC2 Instance?</h3>
      <p>An AWS EC2 Instance is ....</p>
    </div>
  );
}

export default StatusPage;
