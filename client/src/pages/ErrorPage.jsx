import React from "react";
import Container from "@mui/material/Container";
import PageHeader from "./../components/PageHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ErrorPage = () => {
  return (
    <Container>
      <PageHeader title="Error 404" subtitle="Page not found" />

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" color="initial">
         bad! The requested URL was not found on this server
          </Typography>
          <Button variant="text" color="primary">
            you can Click here to return to the home page...
          </Button>
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

export default ErrorPage;