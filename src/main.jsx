import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen/HomeScreen.jsx";
import SearchScreen from "./pages/SearchScreen/SearchScreen";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ClickOutsideProvider } from "./contexts/ClickOutsideContext";
import { SelectedTrackProvider } from "./contexts/SelectedTrackContext";
import TrackProfileScreen from "./pages/TrackProfileScreen/TrackProfileScreen";
import { DefaultRatingProvider } from "./contexts/DefaultRatingContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    errorElement: <p>Page not found. Error 404</p>,
  },
  {
    path: "/search/:trackQuery",
    element: <SearchScreen />,
  },
  {
    path: "/track",
    element: <TrackProfileScreen />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <SelectedTrackProvider>
        <DefaultRatingProvider>
          <ClickOutsideProvider>
            <RouterProvider router={router} />
          </ClickOutsideProvider>
        </DefaultRatingProvider>
      </SelectedTrackProvider>
    </ThemeProvider>
  </React.StrictMode>
);
