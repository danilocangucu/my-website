import React from "react";

const NotFound: React.FC = () => {
  // TODO design a better 404
  return (
    <div className="padding-sides-10 body-home full-height">
      <h1 className="home-h1">404 Page Not Found</h1>
      <p><b>The page you are looking for does not exist</b></p>
    </div>
  );
}

export default NotFound;
