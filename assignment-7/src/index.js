import React from "react";
import ReactDOM from "react-dom/client";
// import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {
  HeaderComponent,
  BodyComponent,
  ErrorComponent,
  UserComponent,
} from "./components/index";
import "./index.scss";

// main component to render header component
const AppComponent = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
    </>
  );
};

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppComponent />,
//     errorElement: <ErrorComponent />,
//     children: [
//       {
//         path: "search",
//         element: <BodyComponent />,
//       },
//       {
//         path: "users/:id",
//         element: <UserComponent />,
//       },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={router} />);
root.render(<AppComponent />);
