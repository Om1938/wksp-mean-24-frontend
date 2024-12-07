import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "../components/RegisterPage";
import LoginPage from "../components/Login";
import Home from "../components/Home";

const router = createBrowserRouter([
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Router;
