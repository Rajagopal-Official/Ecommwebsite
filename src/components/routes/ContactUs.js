import React from 'react';
import { Box, Typography, TextField, Button, styled } from '@mui/material';

const ContactUsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
}));

const ContactUsForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 400,
  width: '100%',
  '& > *': {//This selector targets all different children of the form
    marginBottom: theme.spacing(3),
  },
}));

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <ContactUsContainer>
      <Typography variant="h4" component="h2" gutterBottom>
        Contact Us
      </Typography>
      <ContactUsForm onSubmit={handleSubmit}>
        <TextField label="Name" variant="outlined" required />
        <TextField label="Email" variant="outlined" type="email" required />
        <TextField label="Message" variant="outlined" multiline rows={4} required />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </ContactUsForm>
    </ContactUsContainer>
  );
};

export default ContactUs;