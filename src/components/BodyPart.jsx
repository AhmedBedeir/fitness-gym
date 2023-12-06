import { Stack, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
function BodyPart({ title, bodyPart, setBodyPart }) {
  return (
    <Stack
      className="bodyPart-card"
      justifyContent="center"
      alignItems="center"
      type="button"
      sx={{
        borderTop:
          bodyPart === title ? "2px solid var(--light-orange)" : "none",
        background: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "282px",
        cursor: "pointer",
        gap: "47px",
      }}
    >
      <img
        src="/dumbbell.png"
        alt="body part"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography sx={{
        textTransform: "capitalize",
      }}>{title}</Typography>
    </Stack>
  );
}

export default BodyPart;
