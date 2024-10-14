import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";
import NotFound from "./components/NotFound";

const Home = lazy(() => import("./components/Home"));
const OfflinePage = lazy(() => import("./components/OfflinePage"));

const Routes = () =>
  useRoutes([
    { path: "/", element: <Home /> },
    { path: "/offline", element: <OfflinePage /> },
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
