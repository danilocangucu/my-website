import React from "react";

const projectOfflineMessages = {
  lovetokens: "Love Tokens is currently offline.",
  goldenrack: "Golden Rack is currently offline.",
  default: "This project is currently offline.",
};

function OfflinePage() {
  const subdomain = window.location.hostname.split(".")[0];

  const offlineMessage =
    projectOfflineMessages[subdomain] || projectOfflineMessages.default;

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
