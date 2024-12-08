import { Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RegisterPage from "../components/RegisterPage";
import LoginPage from "../components/Login";
import Home from "../components/Home";
import Poll from "../components/Poll";
import Navbar from "../components/Navbar";

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
    element: (
      <>
        <Navbar />
        <Outlet />,
      </>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "poll/:id",
        element: <Poll />,
      },
    ],
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
