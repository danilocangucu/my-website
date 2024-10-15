import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";
import NotFound from "./components/NotFound";

const Home = lazy(() => import("./components/Home"));
const StatusPage = lazy(() => import("./components/StatusPage"));

const Routes = () =>
  useRoutes([
    { path: "/", element: <Home /> },
    { path: "/status", element: <StatusPage /> },
    { path: "*", element: <NotFound /> },
  ]);

export default function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
    </Router>
  );
}
