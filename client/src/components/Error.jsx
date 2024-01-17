import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { string } from "prop-types";

const Error = ({ errorMessage }) => {
  return (
      <Container>
          <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                  <Typography variant="h5" color="initial">
                      bad! something went wrong: {errorMessage}
                  </Typography>
              </Grid>
              <Grid item xs={12} md={4} justifyContent="center">
              <img
  width="100%"
  src="https://publicdomainvectors.org/tn_img/perfil-de-ma.webp"
  alt="profile"
/>
              </Grid>
          </Grid>
      </Container>
  );
};

Error.propTypes = {
  errorMessage: string.isRequired,
}
export default Error;