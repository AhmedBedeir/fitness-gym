import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ExerciseDetail from "./pages/ExerciseDetail.jsx";
import P404 from "./components/P404.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      errorElement: <P404 />,
      element: <App />,
      children: [
        {
          path: "/",
          index: true,
          element: <Home />,
        },
        {
          path: "exercise/:id",
          element: <ExerciseDetail />,
        },
      ],
    },
  ],
  {
    basename: "/fitness-gym/",
  }
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
