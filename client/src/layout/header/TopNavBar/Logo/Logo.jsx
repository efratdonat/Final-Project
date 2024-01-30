import React from "react";
import Typography from "@mui/material/Typography";
import NavBarLink from "../../../../routes/NavBarLink";
import ROUTES from "../../../../routes/routesModel";

const Logo = () => {
  return (
    <NavBarLink to={ROUTES.ROOT} sx={{ color: "#fff", display: "flex", alignItems: "center" }}>
      <img
        src="https://publicdomainvectors.org/tn_img/hitchhand.webp"
        alt="Hitchhiking hand"
        style={{ width: "40px", marginRight: "10px" }} 
      />
      <Typography
        variant="h3"
        sx={{
          display: { xs: "none", md: "inline-flex" },
          marginRight: 4,
          fontFamily: "fantasy",
        }}>
        Firstand
      </Typography>
    </NavBarLink>
  );
};

export default Logo;