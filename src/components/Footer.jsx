import { Box, Typography } from "@mui/material";
function Footer() {
  return (
    <Box
      sx={{
        marginTop: "70px",
        bgcolor: "var(--light-orange-2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "30px",
      }}
    >
      <img src="/fitness-gym/logo.svg" alt="logo" />
      <Typography
        style={{ color: "var(--black)", fontWeight: "bold" }}
        mt="10px"
      >
        Made with 🧡 by{" "}
        <a
          href="https://www.linkedin.com/in/ahmed-bedeir/"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "var(--black)",
            textDecoration: "none",
            borderBottom: "2px solid var(--light-orange)",
          }}
        >
          {" "}
          Bedeir
        </a>
      </Typography>
    </Box>
  );
}

export default Footer;
