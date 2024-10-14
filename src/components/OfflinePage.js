import React from "react";
import { useLocation } from "react-router-dom";

function OfflinePage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subdomain =
    queryParams.get("subdomain")?.split(".")[0] || "This project";

  const offlineMessage = `${
    subdomain.charAt(0).toUpperCase() + subdomain.slice(1)
  } is currently offline.`;

  console.log("Subdomain:", subdomain);

  return (
    // TODO better styling
    <div>
      <h1>{offlineMessage}</h1>
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

export default OfflinePage;
