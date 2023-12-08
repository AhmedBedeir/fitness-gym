/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import PuffLoader from "react-spinners/PuffLoader";

function Loader({ style }) {
  return (
    <Box
      sx={{
        ...style,
      }}
    >
      <PuffLoader color="var(--light-orange)" />
    </Box>
  );
}

export default Loader;
