/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Pagination, Box, Typography, Stack } from "@mui/material";
import { fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

// eslint-disable-next-line react/prop-types
function Exercise({ exercise, setExercise, bodyPart }) {
  const [pageNumber, setPageNumber] = useState(1);
  const cardsPerPage = 9;
  const pagesVisited = pageNumber * cardsPerPage;
  const displayCards = exercise.slice(
    pagesVisited - cardsPerPage,
    pagesVisited
  );
  const paginate = (_, value) => {
    setPageNumber(value);
    window.scrollTo({ top: 1480, behavior: "smooth" });
  };
  useEffect(() => {
    const fetchExercise = async () => {
      const data = [];
      if (bodyPart === "all") {
        const res = await fetchData();
        data.push(...res);
      } else {
        const res = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`
        );
        data.push(...res);
      }
      setExercise(data);
    };
    fetchExercise();
  }, [bodyPart, setExercise]);
  return (
    <Box id="exercise" mt="50px" p="20px">
      <Typography variant="h4" mb="40px">
        Showing Results
      </Typography>
      <Stack
        flexWrap={"wrap"}
        justifyContent={"center"}
        direction={"row"}
        gap={"20px"}
      >
        {displayCards.map((item) => {
          return <ExerciseCard key={item.id} exercise={item} />;
        })}
      </Stack>
      {exercise.length > 9 && (
        <Stack direction={"row"} justifyContent={"center"} mt="50px">
          <Pagination
            count={Math.ceil(exercise.length / cardsPerPage)}
            shape="rounded"
            onChange={paginate}
            defaultPage={1}
          />
        </Stack>
      )}
    </Box>
  );
}

export default Exercise;
