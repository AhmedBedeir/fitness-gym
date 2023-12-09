import React, { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/fetchData";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { Container } from "@mui/material";
const Detail = React.lazy(() => import("../components/Detail"));
// const ExerciseVideos = React.lazy(() => import("../components/ExerciseVideos"));
const SimilarExercises = React.lazy(() =>
  import("../components/SimilarExercises")
);

function ExerciseDetail() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();
  console.log(exerciseDetail);
  useEffect(() => {
    const getExerciseDetail = async () => {
      try {
        const data = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`
        );
        setExerciseDetail(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getExerciseDetail();
  }, [id]);
  if (error) {
    return <Error />;
  }
  if (loading) {
    return (
      <Loader
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      />
    );
  }
  return (
    <Container maxWidth="xl">
      <Suspense>
        <Detail detail={exerciseDetail} />
      </Suspense>
      {/* {exerciseDetail?.name && (
        <Suspense>
          <ExerciseVideos id={id} name={exerciseDetail.name} />
        </Suspense>
      )} */}
      {exerciseDetail?.target && (
        <Suspense>
          <SimilarExercises
            target={exerciseDetail?.target}
            equipment={exerciseDetail?.equipment}
          />
        </Suspense>
      )}
    </Container>
  );
}

export default ExerciseDetail;
