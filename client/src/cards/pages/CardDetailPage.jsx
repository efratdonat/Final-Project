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
      <CardHeader title={card && card.title} sx={{ p: 0, mb: 2, fontSize: '28px', fontWeight: 'bold' }} />
      <Divider />

      {/* Display Image with Green Border */}
      {card && card.image && (
        <Box mt={2}>
          <img
            src={card.image.url}
            alt={card.image.alt}
            style={{
              maxWidth: '100%',
              border: '2px solid green',
              borderRadius: '8px',
              padding: '12px',
            }}
          />
        </Box>
      )}

      <Box mt={2}>
        <Typography variant="body2" color="text.secondary">
          <Typography variant="subtitle1" component="strong" style={{ fontWeight: 'bold' }}>
            Description:{' '}
          </Typography>
          {card && card.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Typography variant="subtitle1" component="strong" style={{ fontWeight: 'bold' }}>
            Price:{' '}
          </Typography>
          {card && card.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Typography variant="subtitle1" component="strong" style={{ fontWeight: 'bold' }}>
            Phone:{' '}
          </Typography>
          {card && card.phone}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
          <strong>Address: </strong>
          {card && card.address.street} {card && card.address.houseNumber} {card && card.address.city}
        </Typography>
      </Box>
    </CardContent>
  );
};

export default CardDetailPage;
