/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData";
import { Box, CircularProgress, Typography } from "@mui/material";
import Error from "./Error";
import HorizontalScrollBar from "./HorizontalScrollBar";
function SimilarExercises({ target, equipment }) {
  const [similarTarget, setSimilarTarget] = useState([]);
  const [similarEquipment, setSimilarEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  console.log(similarEquipment);
  console.log(similarTarget);

  useEffect(() => {
    const getSimilarTarget = async () => {
      try {
        const data = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/target/${target}`
        );
        setSimilarTarget(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getSimilarTarget();
  }, [target]);
  useEffect(() => {
    const getSimilarEquipment = async () => {
      try {
        const data = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`
        );
        setSimilarEquipment(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getSimilarEquipment();
  }, [equipment]);
  if (error) {
    return <Error />;
  }

  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      <Box>
        <Typography
          sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
          fontWeight={700}
          color="var(--black)"
          mb="33px"
        >
          Similar{" "}
          <span
            style={{
              color: "var(--light-orange)",
              textTransform: "capitalize",
            }}
          >
            Target Muscle
          </span>{" "}
          Exercises
        </Typography>
        {loading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress sx={{ color: "var(--light-orange)" }} />
          </Box>
        )}
        <HorizontalScrollBar data={similarTarget} />
      </Box>
      <Box sx={{ mt: "90px" }}>
        <Typography
          sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
          fontWeight={700}
          color="var(--black)"
          mb="33px"
        >
          Similar{" "}
          <span
            style={{
              color: "var(--light-orange)",
              textTransform: "capitalize",
            }}
          >
            Equipment
          </span>{" "}
          Exercises
        </Typography>
        {loading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress sx={{ color: "var(--light-orange)" }} />
          </Box>
        )}
        <HorizontalScrollBar data={similarEquipment} />
      </Box>
    </Box>
  );
}

export default SimilarExercises;
