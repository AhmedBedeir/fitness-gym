import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercise from "../components/SearchExercise";
import Exercise from "../components/Exersice";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [exercise, setExercise] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  if (isLoading)
    return (
      <Loader
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    );
  return (
    <Box>
      <HeroBanner />
      <SearchExercise
        setExercise={setExercise}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercise
        exercise={exercise}
        setExercise={setExercise}
        bodyPart={bodyPart}
      />
    </Box>
  );
}

export default Home;
