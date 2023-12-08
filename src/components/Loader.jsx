/* eslint-disable react/prop-types */
import PuffLoader from "react-spinners/PuffLoader";

function Loader({ style }) {
  return (
    <PuffLoader
      color="var(--light-orange)"
      style={{
        ...style,
      }}
    />
  );
}

export default Loader;
