import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const ImageModal = ({ open, handleClose, imageUrl, imageAlt }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'rgba(0, 0, 0, 0.95)', // Darker background
          borderRadius: '8px',
          padding: '12px',
        }}
      >
        <img
          src={imageUrl}
          alt={imageAlt}
          style={{
            maxWidth: '100%',
            maxHeight: '80vh', // Set a maximum height (80% of the viewport height)
            border: '2px solid green',
            borderRadius: '8px',
          }}
        />
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            color: 'white', // White close button
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for the button
            borderRadius: '50%',
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default ImageModal;
