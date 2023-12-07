import { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

// eslint-disable-next-line react/prop-types
function SearchExercise({ setExercise, bodyPart, setBodyPart }) {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search.length > 2) {
      const data = await fetchData();
      const searchedExercise = data.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search)
      );
      setExercise(searchedExercise);
      console.log(searchedExercise);
    }
  };

  useEffect(() => {
    const fetchBodyParts = async () => {
      try {
        const data = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList"
        );
        setBodyParts(["all", ...data]);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchBodyParts();
  }, []);

  return (
    <Stack
      mt={{ md: "280px", xs: "50px" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography
        fontWeight={600}
        sx={{ fontSize: { lg: "44px", md: "40px", sm: "32px", xs: "25px" } }}
        color={"var(--black)"}
        textAlign="center"
      >
        Awesome Exercises You <br />
        Should You Know
      </Typography>
      <Box component="form" onSubmit={(e) => handleSearch(e)}>
        <Stack
          mt={"40px"}
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={4}
        >
          <TextField
            placeholder="Search Exercise"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            type="text"
            sx={{
              input: {
                fontWeight: "700",
                border: "none",
                borderRadius: "40px",
                height: "15px",
              },
              width: { lg: "1170px", xs: "350px" },
              backgroundColor: "#fff",
              color: "var(--black)",
            }}
          />
          <Button
            className="search-btn"
            sx={{
              bgcolor: "var(--light-orange)",
              color: "var(--white)",
              textTransform: "none",
              fontSize: { lg: "20px", xs: "14px" },
              width: { lg: "175px", xs: "100px" },
              height: "48px",
            }}
          >
            Search
          </Button>
        </Stack>
      </Box>
      <Box
        mt="50px"
        sx={{
          width: "100%",
          p: "20px",
        }}
      >
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          error={error}
        />
      </Box>
    </Stack>
  );
}

export default SearchExercise;
