import { Box, Typography } from "@mui/material";
import TeamsDropdown from "../components/TeamsDropdown";

import teamsData from "../data/teams.ts";
import TeamsMember from "../components/TeamsMember.tsx";

export default function TeamsPage() {
  return (
    <Box sx={{ width: "80vw", mx: "auto", maxWidth: "690px" }}>
      <Typography variant="h1">teams</Typography>
      <Typography variant="body1">
        Anim incididunt magna elit fugiat fugiat. Sit occaecat qui aliqua ea
        magna in ex eu commodo ipsum ad. Irure dolore do occaecat et cillum
        anim.
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {teamsData.map(
          ({
            sx,
            imgSrc,
            teamName,
            description,
            placeImgRight,
            borderSpecList
          }) => (
            <>
              <TeamsDropdown
                key={teamName}
                sx={sx}
                imgSrc={imgSrc}
                teamName={teamName}
                description={description}
                {...{placeImgRight}}
                borderSpecList={borderSpecList}
              />
              {/* <TeamsMember
                imgSrc="/JosephYoo.jpg"
                name="Joseph"
                position="Lead"
                size="min(20vw, calc(690px / 4))"
              ></TeamsMember> */}
            </>
          )
        )}
      </Box>
    </Box>
  );
}
