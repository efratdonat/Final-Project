import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import cardType from "../../cards/models/types/cardType";

const CardBody = ({ card }) => {
  const { title, description, price, phone, address, bizNumber } = card;
  const { street, houseNumber, city } = address;

  return (
    <CardContent>
      <CardHeader title={title}  sx={{ p: 0, mb: 1 }} />
      <Divider />
      <Box mt={1}>
        <Typography variant="body2" color="text.secondary">
          <Typography variant="subtitle1" component="strong">
            Description:{" "}
          </Typography>
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Typography variant="subtitle1" component="strong">
            Price:{" "}
          </Typography>
          {price} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Typography variant="subtitle1" component="strong">
            Phone:{" "}
          </Typography>
          {phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Address: </strong>
          {street} {houseNumber} {city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Card Number: </strong> {bizNumber}
        </Typography>
      </Box>
    </CardContent>
  );
};

CardBody.propTypes = {
  card: cardType.isRequired,
};

export default CardBody;
