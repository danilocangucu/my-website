import React, { Suspense, lazy } from "react";
import { useRoutes, BrowserRouter as Router } from "react-router-dom";

import Loading from "./components/Loading";
import NotFound from "./components/NotFound";
import Hohoho from "./pages/Hohoho/Hohoho";
import ChristmasGiftPage from "./pages/Hohoho/ChristmasGiftPage";

const Home = lazy(() => import("./components/Home"));
const StatusPage = lazy(() => import("./pages/StatusPage/StatusPage"));

const RouteHandler: React.FC = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/status", element: <StatusPage /> },
    // Temporary routes for testing christmas webpage gift
    { path: "/hohoho", element: <Hohoho /> },
    { path: "/hohoho/christmas-gift", element: <ChristmasGiftPage /> },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <RouteHandler />
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
