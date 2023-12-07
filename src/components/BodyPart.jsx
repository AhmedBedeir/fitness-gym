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
          bodyPart === title ? "3px solid var(--light-orange)" : "none",
        background: "var(--white)",
        borderBottomLeftRadius: "20px",
        // width: "270px",
        height: "282px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => setBodyPart(title)}
    >
      <img
        src="/dumbbell.png"
        alt="body part"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        sx={{
          textTransform: "capitalize",
          fontSize: "24px",
          fontWeight: "bold",
          color: "var(--black)",
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
}

export default BodyPart;
