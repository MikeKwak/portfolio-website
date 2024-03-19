import Box from '@mui/material/Box'

import Footer from './footer'

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#4E5E3A',
      }}
    >
      <Box
        component="main"
        sx={{
            position: 'absolute',
          height: 'calc(100vh - 30px)',         //fix for responsive
          width: 'calc(100vw - 30px)',
          border: '1px solid #E0C8A6',
          backgroundColor: '#50623A',
        }}
      >
        {children}
      </Box>
      {/* <Footer /> */}
    </Box>
  )
}
