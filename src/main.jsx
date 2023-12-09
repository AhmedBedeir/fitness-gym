import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ExerciseDetail from "./pages/ExerciseDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <h1>Not Found</h1>,
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
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
