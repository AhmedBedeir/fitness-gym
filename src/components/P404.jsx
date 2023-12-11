import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
function P404() {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        width: "90%",
        margin: "auto",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="/fitness-gym/404.png"
        alt="404"
        style={{
          width: "100%",
          maxWidth: "500px",
        }}
      />
      <Button
        variant="contained"
        color="warning"
        size="large"
        onClick={() => navigate("/")}
      >
        Go Home
      </Button>
    </Stack>
  );
}

export default P404;
