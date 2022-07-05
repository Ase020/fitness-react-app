import React, { useEffect, useState } from "react";
import { Stack, Typography, TextField, Box, Button } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

function SearchExercises({ setExercises, bodyPart, setBodyPart }) {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      // console.log(exercisesData);
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
      console.log(searchedExercises);
    }
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      padding="20px"
      marginTop="36px"
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        marginBottom="50px"
        textAlign={"center"}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" marginBottom="72px">
        <TextField
          placeholder="Search Exercises"
          height="75px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          type="text"
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "5px",
            },
            width: { lg: "800px", xs: "350px" },
            background: "white",
            borderRadius: "40px",
          }}
        />

        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "white",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: 0,
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: "relative", width: "100%", padding: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </Box>
    </Stack>
  );
}

export default SearchExercises;
