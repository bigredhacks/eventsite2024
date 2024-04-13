import React from "react";
import { Box, Typography } from "@mui/material";
import TrackIcon from "../assets/track1_cropped.png";

interface TrackProps {
  trackName: string;
  image?: string;
  alt: string;
  description: string;
}

const Track: React.FC<TrackProps> = ({ trackName, image = TrackIcon, alt, description }) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
    >
      <Box
        component="img"
        src={image}
        alt={alt}
        sx={{ filter: "invert(100%)", width: 160, mb: 2 }} //NOTE: remove the invert filter for actual website
      />
      <Typography variant="h4" gutterBottom>{trackName}</Typography>
      <Typography variant="body1">{description}</Typography>
    </Box>
  );
};

export default Track;