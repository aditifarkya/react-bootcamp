import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {
  HeaderComponent,
  BodyComponent,
  ErrorComponent,
} from "./components/index";
import "./index.scss";

const UserComponent = lazy(() =>
  import("./components/users-component/index.js")
);
// main component to render header component
const AppComponent = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "search",
        element: <BodyComponent />,
      },
      {
        path: "user/:id",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <UserComponent />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
