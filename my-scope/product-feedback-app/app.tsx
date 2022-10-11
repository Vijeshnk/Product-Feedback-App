import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home';
import EditFeedback from './pages/EditFeedback';
import { CssBaseline } from '@mui/material';
import './assets/css/jost.css';
import CommentSection from './pages/CommentSection';
import RoadMap from './pages/RoadMap';
import { green } from '@mui/material/colors';

export function ProductFeedbackAppApp() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0, // phone
        sm: 700, // tablets
        md: 1165, // small laptop
        lg: 1165, // desktop
        xl: 1536, // large screens
      },
    },
    palette: {
      background: {
        default: 'hsl(231, 100%, 97%)',
      },

      primary: {
        main: 'hsl(230.7, 33.3%, 34.1%)',
      },
    },
    typography: {
      fontFamily: 'Jost',
    },
  });

  // const Responsive = styled('div')(({ theme }) => ({
  //   [theme.breakpoints.down('xs')]: {
  //     palette: {
  //       background: {
  //         default: '#000',
  //       },
  //       primary: {
  //         main: 'hsl(230.7, 33.3%, 34.1%)',
  //       },
  //     },
  //     typography: {
  //       fontFamily: 'Jost',
  //     },
  //   },
  // }));

  return (
    <div>
      {/* <Responsive> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/feedback" element={<EditFeedback />}>
            {' '}
          </Route>

          <Route path="/comments" element={<CommentSection />}>
            {' '}
          </Route>

          <Route path="/roadmap" element={<RoadMap />}>
            {' '}
          </Route>
        </Routes>
      </ThemeProvider>
      {/* </Responsive> */}
    </div>
  );
}
