/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Error from "./Error";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import {
  fetchData,
  youtubeSearchUrl,
  youtubeSearchOptions,
} from "../utils/fetchData";

function ExerciseVideos({ name }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [exerciseVideos, setExerciseVideos] = useState([]);
  console.log(exerciseVideos);
  useEffect(() => {
    const getVideos = async () => {
      try {
        const data = await fetchData(
          `${youtubeSearchUrl}/search?query=${name}`,
          youtubeSearchOptions
        );
        setExerciseVideos(data.contents);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getVideos();
  }, [name]);
  if (error) {
    return <Error />;
  }
  return (
    <Box sx={{ marginTop: { lg: "103px", xs: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color="var(--black)"
        mb="33px"
      >
        Watch{" "}
        <span
          style={{ color: "var(--light-orange)", textTransform: "capitalize" }}
        >
          {name || ""}
        </span>{" "}
        exercise videos
      </Typography>
      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress
            sx={{
              color: "var(--light-orange)",
              textAlign: "center",
            }}
          />
        </Box>
      )}
      {exerciseVideos.length > 0 && (
        <Stack
          sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}
          justifyContent="flex-start"
          flexWrap="wrap"
          alignItems="center"
        >
          {exerciseVideos.slice(0, 3)?.map((item, index) => (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ borderTopLeftRadius: "20px" }}
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
              />
              <Box>
                <Typography
                  sx={{ fontSize: { lg: "28px", xs: "18px" } }}
                  fontWeight={600}
                  color="var(--black)"
                >
                  {item.video.title}
                </Typography>
                <Typography fontSize="16px" color="var(--black)">
                  {item.video.viewCountText}
                </Typography>
                <Typography fontSize="14px" color="var(--black)">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          ))}
        </Stack>
      )}
    </Box>
  );
}

export default ExerciseVideos;
