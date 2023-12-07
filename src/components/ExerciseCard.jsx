/* eslint-disable react/prop-types */
import { Chip, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function ExerciseCard({ exercise }) {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction={"row"} gap={"10px"} mt={"10px"} ml={"10px"}>
        <Chip
          label={exercise.bodyPart}
          color="warning"
          sx={{
            textTransform: "capitalize",
          }}
        />
        <Chip
          label={exercise.equipment}
          variant="outlined"
          color="warning"
          sx={{
            textTransform: "capitalize",
          }}
        />
      </Stack>
      <Typography
        variant="h6"
        sx={{
          textTransform: "capitalize",
          margin: "10px 0 10px 10px",
          fontWeight: "bold",
          fontSize: "20px",
          color: "var(--black)",
        }}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
}

export default ExerciseCard;
