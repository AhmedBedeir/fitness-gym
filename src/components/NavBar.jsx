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
        px: "80px",
        pt: "20px",
      }}
    >
      <Link to="/">
        <img src="/logo.svg" alt="logo" />
      </Link>
      <Stack
        direction="row"
        spacing={6}
        sx={{
          alignItems: "flex-end",
          fontSize: fontSz,
        }}
      >
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/exercise/1">Exercise</NavLink>
      </Stack>
    </Stack>
  );
}

export default NavBar;
