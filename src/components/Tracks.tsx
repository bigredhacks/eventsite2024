import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Track from "./Track";

const buildDefaultList = () => {
  const defaultList = [];
  for (let i = 1; i <= 6; i++) {
    defaultList.push({
      trackName: "Track " + i,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      alt: "",
    });
  }
  return defaultList;
};

const defaultList = buildDefaultList();

const Tracks = ({ TrackList = defaultList }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mx: "10%",
        mb: 20,
      }}
    >
      <Typography align="center" variant="h3" fontWeight="bold" gutterBottom>
        Tracks
      </Typography>
      <Grid container spacing={10} justifyContent="center">
        {TrackList.map((props) => (
          <Grid item xs={6}>
            {" "}
            <Track {...props} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Tracks;