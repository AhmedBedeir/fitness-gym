import { Typography, Box } from "@mui/material";

// eslint-disable-next-line react/prop-types
function Title({ text }) {
  return (
    <Box
      sx={{
        display: { md: "block", xs: "none" },
        position: "absolute",
        zIndex: "-1",
      }}
    >
      <Typography
        fontWeight={600}
        fontSize={"200px"}
        sx={{
          color: "var(--light-orange)",
          opacity: "0.1",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

export default Title;
