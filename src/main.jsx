import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./pages";
import stores from "./stores";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={stores}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
