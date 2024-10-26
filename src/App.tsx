import React from "react";

import "./App.css";
import AppRoutes from "./AppRoutes";
// import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <AppRoutes />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
