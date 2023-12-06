import { Typography, Box } from "@mui/material";
import Title from "./Title";

function HeroBanner() {
  return (
    <Box
      sx={{
        mt: { lg: "50px", xs: "30px" },
        ml: { sm: "50px" },
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", md: "space-between" },
        textAlign: { xs: "center", md: "left" },
      }}
      p="20px"
      className="hero-banner"
    >
      <Box sx={{ flex: 1 }} position="relative">
        <Typography
          color="var(--light-orange)"
          fontWeight="600"
          fontSize="26px"
          className="animate__animated animate__fadeInDown"
        >
          Fitness Club
        </Typography>

        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}
          mb="23px"
          mt="30px"
          color={"var(--black)"}
        >
          Sweat, Smile <br />
          And Repeat
        </Typography>
        <Typography
          fontSize="20px"
          mb="40px"
          className="animate__animated animate__fadeInUp"
          color={"var(--black)"}
        >
          Check out the most effective exercises personalized to you
        </Typography>
        <button
          href="#exercises"
          style={{
            color: "var(--white)",
            backgroundColor: "var(--black)",
            padding: "15px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Explore Exercises
        </button>
        <Title text="Exercise" />
      </Box>
      <Box
        sx={{
          flex: 1,
          maxHeight: "400px",
          display: { xs: "none", md: "block" },
        }}
        className="animate__animated animate__fadeInDown"
      >
        <img
          src="/hero.jpg"
          alt="hero-banner"
          style={{
            width: "70%",
            marginTop: "-220px",
            borderBottomLeftRadius: "50px",
            // borderBottomRightRadius: "50px",
          }}
        />
      </Box>
    </Box>
  );
}

export default HeroBanner;
