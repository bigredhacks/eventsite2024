import { Box } from "@mui/material";
import NavBarButton from "./NavBarButton";

export default function NavBar() {
  return (
    <Box
      id="navbar-wrapper"
      sx={{
        width: "100%",
        position: "absolute",
        top: "0px",
        right: "0px",
        display: "flex",
      }}
    >
      <Box sx={{ flex: "1" }}>
        <img
          src="/MLH.png"
          style={{ width: "7rem", position: "absolute", left: "3rem" }}
        />
      </Box>
      <Box
        id="navbar-links"
        sx={{
          padding: "2rem",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <NavBarButton
          text="Teams"
          variant="secondary"
          sx={{ height: "100%" }}
        />
        <NavBarButton
          text="Events"
          variant="secondary"
          sx={{ height: "100%" }}
        />
        <NavBarButton
          text="FAQ"
          variant="secondary"
          sx={{ height: "100%" }} />
        <NavBarButton
          text="Sponsors"
          variant="secondary"
          sx={{ height: "100%" }}
        />
        <NavBarButton
          text="Apply"
          variant="primary"
          sx={{
            backgroundColor: "#FF3225",
            px: "1rem"
          }}
        />
      </Box>
    </Box>
  );
}
