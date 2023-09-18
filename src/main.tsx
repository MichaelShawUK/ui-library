import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ButtonPage from "./pages/Buttons.tsx";
import InputPage from "./pages/Inputs.tsx";
import ModalPage from "./pages/Modal.tsx";
import DropDownPage from "./pages/DropDown.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "buttons",
        element: <ButtonPage />,
      },
      {
        path: "inputs",
        element: <InputPage />,
      },
      {
        path: "modal",
        element: <ModalPage />,
      },
      {
        path: "dropdown",
        element: <DropDownPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
