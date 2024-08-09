import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import React from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp"
import Layout from "./pages/Layout";
import ProfilePage from "./pages/ProfilePage";
import RecipesPage from "./pages/RecipeShop";
import RecipeInformation from "./pages/RecipeInfo";
import SelectCategoryPage from "./pages/SelectCategoryPage";
import RecipeUploadPage from "./pages/RecipeUploadPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/",
         element: <HomePage />
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/ProfilePage",
        element: <ProfilePage />,
      },
      {
        path: "/RecipeShop",
        element: <RecipesPage />,
      },
      {
        path: "/RecipeInfo",
        element: <RecipeInformation />,
      },
      {
        path: "/SelectCategoryPage",
        element: <SelectCategoryPage />,
      },
      {
        path: "/RecipeUploadPage",
        element: <RecipeUploadPage />,
      },
    ],
  },
]);






