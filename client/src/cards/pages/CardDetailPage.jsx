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
      <Box display="flex">
        <Box flex="1" pr={2}>
          {/* Details on the left */}
          <Typography variant="body2" color="text.secondary">
            <CardHeader title={card && card.title} sx={{ mb: 2, fontSize: '28px', fontWeight: 'bold' }} />
            <Divider />
            <Box>
              <Typography variant="subtitle1" component="strong" style={{ fontWeight: 'bold' }}>
                Description:
              </Typography>
              <Typography variant="body2">{card && card.description}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1" component="strong" style={{ fontWeight: 'bold' }}>
                Price:
              </Typography>
              <Typography variant="body2">{card && card.price}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1" component="strong" style={{ fontWeight: 'bold' }}>
                Phone:
              </Typography>
              <Typography variant="body2">{card && card.phone}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1" component="strong" style={{ fontWeight: 'bold' }}>
                Address:
              </Typography>
              <Typography variant="body2">
                {card && card.address.street} {card && card.address.houseNumber} {card && card.address.city}
              </Typography>
            </Box>
          </Typography>
        </Box>

        <Box flex="1">
          {/* Image on the right */}
          {card && card.image && (
            <Box>
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
        </Box>
      </Box>
    </CardContent>
  );
};

export default CardDetailPage;
