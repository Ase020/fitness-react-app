import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

function Details({ exerciseDetail }) {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
    {
      icon: TargetImage,
      name: target,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: "row" },
        padding: "20px",
        alignItems: "center",
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />

      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          variant="h4"
          textTransform="capitalize"
          sx={{ fontSize: { lg: "64px", xs: "30px" } }}
          fontWeight={700}
          color="#ff2625"
        >
          {name}
        </Typography>

        <Typography
          sx={{ fontSize: { lg: "24px", xs: "18px" } }}
          color="#4f4c4c"
        >
          {" "}
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize", color: "#ff2625" }}>
            {name}
          </span>{" "}
          is one of the best <br /> exercises to target your{" "}
          <span style={{ textTransform: "capitalize", color: "#ff2625" }}>
            {target}
          </span>
          . It will help you improve your <br /> mood and gain energy.
        </Typography>

        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography variant="h6" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default Details;
