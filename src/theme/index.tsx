'use client'

import { createTheme, ThemeOptions, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

type Props = {
    children: React.ReactNode;
  };
  
  export default function ThemeProvider({ children }: Props) {
    const theme = createTheme();

    theme.typography.h1 = {
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
          fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
          fontSize: '120px',
        },
      };

      return (
        <MuiThemeProvider theme={theme}>
            {children}
        </MuiThemeProvider>
      )
  }