import React, { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/fetchData";
import Error from "../components/Error";
import Loader from "../components/Loader";
const Detail = React.lazy(() => import("../components/Detail"));
const ExerciseVideos = React.lazy(() => import("../components/ExerciseVideos"));
const SimilarExercises = React.lazy(() =>
  import("../components/SimilarExercises")
);

function ExerciseDetail() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();
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
    return <Loader />;
  }
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Detail detail={exerciseDetail} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ExerciseVideos id={id} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <SimilarExercises id={id} />
      </Suspense>
    </div>
  );
}

export default ExerciseDetail;
