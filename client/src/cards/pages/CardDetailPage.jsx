import { useParams } from 'react-router-dom';
import useCards from '../hooks/useCards';
import { useEffect } from 'react';
import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';

const CardDetailPage = () => {
  const { id } = useParams();
  const {
    value: { card },
    handleGetCard,
  } = useCards();

  useEffect(() => {
    handleGetCard(id);
  }, []);

  return (
    <CardContent>
      <CardHeader title={card && card.title} sx={{ p: 0, mb: 1 }} />
      <Divider />
      <Box mt={1}>
        <Typography variant="body2" color="text.secondary">
          <Typography variant="subtitle1" component="strong">
            Description:{' '}
          </Typography>
          {card && card.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Typography variant="subtitle1" component="strong">
            Price:{' '}
          </Typography>
          {card && card.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Typography variant="subtitle1" component="strong">
            Phone:{' '}
          </Typography>
          {card && card.phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Address: </strong>
          {card && card.address.street} {card && card.address.houseNumber}{' '}
          {card && card.address.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Card Number: </strong> {card && card.bizNumber}
        </Typography>
      </Box>
    </CardContent>
  );
};

export default CardDetailPage;