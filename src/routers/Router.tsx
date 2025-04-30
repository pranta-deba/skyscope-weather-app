import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: "error",
    element: "root",
    children: [
      {
        path: "",
        element: "home",
      },
    ],
  },
]);
