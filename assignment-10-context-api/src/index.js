import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {
  HeaderComponent,
  ErrorComponent,
  FooterComponent,
  BodyComponent,
} from "./components/index";
import ThemeContext from "./context/theme-context";
import UserContext from "./context/user-context.js";
import "./index.scss";

const UserComponent = lazy(() =>
  import("./components/users-component/index.js")
);
const AboutUsComponent = lazy(() => import("./components/aboutus-component"));
const SearchFilterPageComponent = lazy(() =>
  import("./components/search-filter-page-Component")
);
// main component to render header component
const AppComponent = () => {
  const [theme, setTheme] = useState("light");
  const [email, setemail] = useState("abc@gmail.com");
  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <HeaderComponent />
      <UserContext.Provider value={{ email: email, setemail: setemail }}>
        <Outlet />
        <FooterComponent />
      </UserContext.Provider>
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
          path: "/",
          element: <BodyComponent />,
        },
        {
          path: "search",
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <SearchFilterPageComponent />
            </Suspense>
          ),
        },
        {
          path: "aboutus",
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <AboutUsComponent />
            </Suspense>
          ),
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
