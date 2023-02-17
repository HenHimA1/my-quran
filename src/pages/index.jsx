import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./home";
import Surat from "./surah";
import SingleSurah from "./singleSurah";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/surah",
    element: <Surat />,
  },
  {
    path: "/surah/:surahId",
    element: <SingleSurah />,
  },
]);

export default router;
