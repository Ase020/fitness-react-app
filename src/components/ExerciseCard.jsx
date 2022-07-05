import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Stack } from "@mui/material";

function ExerciseCard({ exercise }) {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "20px",
            color: "white",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>

        <Button
          sx={{
            ml: "20px",
            color: "white",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="20px"
        color="black"
        textTransform="capitalize"
        fontWeight="bold"
        mt="10px"
        paddingBottom="10px"
        fontSize="20px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
}

export default ExerciseCard;
