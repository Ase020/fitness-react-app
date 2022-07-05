import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Loader from "./Loader";

function ExerciseVideos({ exerciseVideos, name }) {
  console.log(exerciseVideos);
  if (!exerciseVideos.length) return <Loader />;
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" }, p: "20px" }}>
      <Typography variant="h4" mb="35px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>

      <Stack
        justifyContent="flex-start"
        alignItems="center"
        flexWrap="wrap"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "100px", xs: 0 } }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            key={index}
            className="exercise-video"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />

            <Box>
              <Typography variant="h5" color="black">
                {item.video.title}
              </Typography>

              <Typography variant="p" color="black">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
}

export default ExerciseVideos;
