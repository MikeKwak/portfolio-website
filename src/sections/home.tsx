import React from 'react';
import { Box } from '@mui/material';
import MainLogo from 'src/components/settings/mainLogo';

const HomeSection = () => {
  return (
    <Box
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: '#50623A',
      }}
    >
      <MainLogo />
    </Box>
  );
};

export default HomeSection;
