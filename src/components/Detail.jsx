/* eslint-disable react/prop-types */

import { Stack, Typography } from "@mui/material";

function Detail({ detail }) {
  const { bodyPart, gifUrl, name, target, equipment } = detail;
  const extraDetail = [
    {
      name: bodyPart,
      icon: "/arm.png",
    },
    {
      name: target,
      icon: "/dumbbell.png",
    },
    {
      name: equipment,
      icon: "/equipment.png",
    },
  ];
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      gap={"60px"}
      p="20px"
      alignItems={"center"}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack direction={"column"} gap={{ xs: "20px", sm: "35px" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
          }}
        >
          {name} ({bodyPart})
        </Typography>
        <Typography variant="h6">
          Exercise keep you strong. {name} is one of the best exercises for{" "}
          {target} muscles. It will help you improve your mode and gain energy.
        </Typography>
        {extraDetail.map((item) => {
          return (
            <Stack
              key={item.name}
              direction="row"
              alignItems="center"
              gap="20px"
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "var(--white)",
                  padding: "10px",
                  borderRadius: "50%",
                }}
              />
              <Typography textTransform={"capitalize"} variant="h6">
                {item.name}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}

export default Detail;
