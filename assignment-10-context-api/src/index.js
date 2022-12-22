import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {
  HeaderComponent,
  BodyComponent,
  ErrorComponent,
} from "./components/index";
import ThemeContext from "./context/theme-context.js";
import "./index.scss";

const UserComponent = lazy(() =>
  import("./components/users-component/index.js")
);
// main component to render header component
const AppComponent = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <HeaderComponent />
      <Outlet />
    </ThemeContext.Provider>
  );
};

const router = createBrowserRouter(
  [
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
  ],
  {
    basename: "/react-bootcamp",
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
