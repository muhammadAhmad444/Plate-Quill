import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./pages/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
