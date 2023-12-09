import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { Outlet } from "react-router-dom";
import "animate.css";
function App() {
  return (
    <>
      <NavBar />
      <div
        className="container"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
