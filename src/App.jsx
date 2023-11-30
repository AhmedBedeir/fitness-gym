import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ExerciseDetail from "./pages/ExerciseDetail";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <h1>Not Found</h1>,
    element: <Home />,
  },
  {
    path: "exercise/:id",
    element: <ExerciseDetail />,
  },
]);
function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
