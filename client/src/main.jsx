import App from "./App";
import ErrorPage from "./pages/Error.jsx";
import Home from "./pages/Home.jsx";
import Packages from "./pages/Packages.jsx";
import StoreHours from "./pages/Hours.jsx";
import Schedule from "./pages/Schedule.jsx";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const pathsArray = [
  {
      index: true,
      element: <Home />,
  },
  {
      path: "packages",
      element: <Packages />,
  },
  {
      path: "hours",
      element: <StoreHours />,
  },
  {
      path: "schedule",
      element: <Schedule />,
  },
]

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: pathsArray,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
