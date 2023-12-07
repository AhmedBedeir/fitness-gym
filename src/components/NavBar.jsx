import { Stack } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
const fontSz = "20px";
function NavBar() {
  return (
    <Stack
      margin="auto"
      direction="row"
      gap={{ xs: "40px", sm: "180px" }}
      sx={{
        alignItems: "center",
        px: { xs: "10px", sm: "40px", md: "80px" },
        pt: "20px",
      }}
    >
      <Link to="/">
        <img src="/logo.svg" alt="logo" />
      </Link>
      <Stack
        direction="row"
        spacing={{ xs: 2, sm: 4, md: 6 }}
        sx={{
          alignItems: "flex-end",
          fontSize: { sm: fontSz, xs: "18px" },
        }}
      >
        <NavLink to="/" end>
          Home
        </NavLink>
        <a href="#exercise">Exercise</a>
      </Stack>
    </Stack>
  );
}

export default NavBar;
