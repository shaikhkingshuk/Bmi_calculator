import FrontPage from "./components/FrontPage";
import React from "react";
import BmiChart from "./components/BmiChart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage />,
  },
  {
    path: "/chart",
    element: <BmiChart />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
