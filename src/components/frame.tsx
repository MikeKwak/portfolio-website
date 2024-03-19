import { Box } from '@mui/material';
import React, { useState } from 'react';

type Props = {
    expand: boolean,
}

const DynamicFrame: React.FC<Props> = ({ expand }) => {
    const [rect, setRect] = useState<{ width: Number, height: Number}>({ width: 0, height: 0 });

  return (
    <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          height: expand ? 'calc(100vw - 30px)' : 'calc(100vh - 150px)', //fix for responsive
          width: expand ? 'calc(100vw - 30px)' : 'calc(100vw - 150px)',
          border: '1px solid #E0C8A6',
          backgroundColor: '#ffffff00',
          zIndex: 1000,
          pointerEvents: 'none',
          transition: '0.3s',
        }}
      />
  );
};

export default DynamicFrame;
