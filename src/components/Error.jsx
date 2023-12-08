import { Alert, Box } from "@mui/material";

function Error() {
  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "1170px",
        margin: "0 auto",
      }}
    >
      <Alert
        severity="error"
        mt="35px"
        sx={{
          fontSize: "18px",
          alignItems: "center",
        }}
      >
        Something went wrong.👀
        <br />
        Please try again later.
      </Alert>
    </Box>
  );
}

export default Error;
