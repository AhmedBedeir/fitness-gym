import { useState, useEffect } from "react";
import { Pagination, Box, Typography } from "@mui/material";
import { fetchData } from "../utils/fetchData";

function Exercise({ exercise, setExercise, bodyPart }) {
  return (
    <Box id="exercise" mt="50px" p="20px">
      <Typography variant="h4" mb="40px">
        Showing Results
      </Typography>
    </Box>
  );
}

export default Exercise;
