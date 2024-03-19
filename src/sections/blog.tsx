import { Box } from '@mui/material';
import React from 'react';

type Props = {
    blogRef: React.RefObject<HTMLElement>; // Use HTMLElement for general HTML elements or be specific like HTMLDivElement
  }

const BlogSection: React.FC<Props> = ({ blogRef }) => {
  return (
    <Box
    ref={blogRef}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: '#E0C8A6',
      }}
    >
      
    </Box>
  );
};

export default BlogSection;
