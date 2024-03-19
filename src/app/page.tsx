'use client';

// import { HomeView } from 'src/sections/home/view'
import { Box, Typography } from '@mui/material';
import { Inspiration, Inter } from 'next/font/google';
import VaraText from 'src/utils/VaraText';

import Image from 'next/image';
import mainLogo from 'src/assets/mainLogo.svg';
import MainLogo from 'src/components/settings/mainLogo';
import useElementVisibility from 'src/hooks/useElementVisibility';
// ----------------------------------------------------------------------

// export const metadata = {
//   title: 'Minimal: The starting point for your next project',
// }

const inspiration = Inspiration({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

import HomeSection from 'src/sections/home';
import zIndex from '@mui/material/styles/zIndex';
import BlogSection from 'src/sections/blog';
import { useCallback, useEffect, useRef, useState } from 'react';
import DynamicFrame from 'src/components/frame';
// const inspiration = "'Inspiration', cursive";
const inter = "'Inter', cursive";

export default function HomePage() {
  const [ expand, setExpand ] = useState<Boolean>(false);
  const containerRef = useRef<HTMLElement | null>(null);
  // const mainRef = useRef<HTMLElement | null>(null);
  const blogRef = useRef<HTMLElement | null>(null);



  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleScroll = () => {
        const containerScrollPosition = containerRef.current!.scrollTop;
        const blogPosition = blogRef.current!.offsetTop - containerRef.current!.offsetTop;

        if (containerScrollPosition >= blogPosition) {
          setExpand(true);
        }
      }

      container.addEventListener('scroll', handleScroll)

      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [])

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
      <DynamicFrame expand={true} />

      <Box
        component="main"
        ref={containerRef}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          height: 'calc(100vh - 30px)', //fix for responsive
          width: 'calc(100vw - 30px)',
          //   display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'center',
          // alignItems: 'center',
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
