import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home';
import EditFeedback from './pages/EditFeedback';
import { CssBaseline } from '@mui/material';
import './assets/css/jost.css';

export function ProductFeedbackAppApp() {
  const theme = createTheme({
    palette: {
      background: {
        default: '#f2f2f2',
      },
      primary: {
        main: 'hsl(230.7, 33.3%, 34.1%)',
      },
    },
    typography: {
      fontFamily: 'Jost',
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* header component */}
        <Routes>
          <Route path="/" element={<Home />}>
            {/* home page component */}
          </Route>

          <Route path="/feedback" element={<EditFeedback />}>
            {' '}
            {/* about page component */}
          </Route>
        </Routes>
        {/* footer component */}
      </ThemeProvider>
    </>
  );
}
