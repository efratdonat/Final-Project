import React, { useRef, useEffect } from "react";
import Container from "@mui/material/Container";
import PageHeader from "../components/PageHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const StyledImage = styled("img")({
  width: "100%",
  borderRadius: "8px",
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
});

const rotateImage = (ref) => {
  if (ref.current) {
    ref.current.style.transition = "transform 20s linear infinite";
    ref.current.style.transform = "rotate(360deg)";
  }
};

const AboutPage = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    rotateImage(imageRef);
  }, []);

  return (
    <Container>
      <PageHeader
        title="About Our Website"
        subtitle="Solutions for new products"
      />

      <Grid container spacing={2}>
        <Grid item xs={12} md={8} alignSelf="center">
          <Typography variant="body1" sx={{ color: "#555", marginBottom: "1rem" }}>
            Welcome to Firstand, the amazing place where firsthand meets modern reality and sustainability.
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", marginBottom: "1rem" }}>
            We are proud to present an application that will help you find and sell high-quality items, which are in firsthand condition and waiting in the homes of users like yourself.
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", marginBottom: "1rem" }}>
            The vibrant green color in our website design is not just a pattern – it is our message to the world.
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", marginBottom: "1rem" }}>
            "Firstand is dedicated to products that are brand new. It encourages the transfer of items to people who can enjoy them, instead of discarding or disposing of them."
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", marginBottom: "1rem" }}>
            We invite you to publish and discover items of the highest quality, where each purchase and sale brings new life to every item.
          </Typography>
          <Typography variant="body1" sx={{ color: "#555" }}>
            The process is simple and quick: log in, post, and discover. High-quality items are waiting for you to explore, and our system ensures that you will encounter new realities on a daily basis.
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", marginBottom: "1rem" }}>
            At Firstand, we take pride in being part of an environmental conservation process, and we are excited to see the Israeli audience connecting and influencing recycling through your fantastic items. Join our friendly and colorful community today – Firstand, where every firsthand can change and upgrade our lives and the world around us
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <Box sx={{ maxWidth: "100%", textAlign: "center" }}>
            <StyledImage ref={imageRef} src="https://publicdomainvectors.org/tn_img/1294067564.webp" alt="card" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;