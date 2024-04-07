'use client'

// import { HomeView } from 'src/sections/home/view'
import { Box, Typography } from '@mui/material';
import HomeSection from 'src/sections/home';
import { motion } from "framer-motion";
import BlogSection from 'src/sections/blog';
import { useEffect, useRef, useState } from 'react';
import useScrollPosition from 'src/hooks/useScrollPosition';

// ----------------------------------------------------------------------

export default function HomePage() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { y } = useScrollPosition(containerRef);
  
  const [dimensions, setDimensions] = useState({
    width: 'calc(100vw - 30px)',
    height: 'calc(100vh - 30px)',
  });

  const blogRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (y > 500) { // Assuming the scroll position threshold is 100
      setDimensions({
        width: 'calc(100vw - 15px)',
        height: 'calc(100vh - 15px)',
      });
    } else {
      setDimensions({
        width: 'calc(100vw - 70px)',
        height: 'calc(100vh - 70px)',
      });
    }
  }, [containerRef, y])

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#4E5E3A',
        zIndex: 0,
      }}
    >
      <Box
        component={motion.div}
        ref={containerRef}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          transition: '0.3s',
          height: dimensions.height,
          width: dimensions.width,
          border: '1px solid #E0C8A6',
          overflowY: 'scroll',
          zIndex: 100,
        }}
      >
        <HomeSection />
        <BlogSection blogRef={blogRef} />
        <HomeSection />
      </Box>
    </Box>
  );
}
