import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Home from './pages/Home';
import { red } from '@mui/material/colors';
import EditFeedback from './pages/EditFeedback';

export function ProductFeedbackAppApp() {
  const theme = createTheme({
    palette: {
      background: {
        default: '#f2f2f2',
      },
      // `#f2f2f2`
    },
  });
  return (
    <>
      <MuiThemeProvider theme={theme}>
        {/* header component */}
        <Routes>
          <Route path="/" element={<Home />}>
            {/* home page component */}
          </Route>

          <Route path="/feedback" element={<EditFeedback />}> {/* about page component */}</Route>
        </Routes>
        {/* footer component */}
      </MuiThemeProvider>
    </>
  );
}
