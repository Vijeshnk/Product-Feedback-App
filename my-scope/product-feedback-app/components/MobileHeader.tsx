import {
  AppBar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import { Twirl as Hamburger } from 'hamburger-react';
import React, { useState } from 'react';

type Props = {};

const MobileHeader = (props: Props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute">
        <Card
          sx={{
            borderRadius: '0%',
            boxShadow: 'none',
            width: '100%',
          }}
        >
          <CardMedia
            component="img"
            alt="Feedback Mentor"
            height="85"
            width="100%"
            src="https://product-feedback-app.herokuapp.com/static/media/background-header.bc782ba0.png"
          />
          {/* <Stack direction="row">
            <Stack direction="column"> */}
          <Typography
            style={{
              position: 'absolute',
              color: 'white',
              top: 15,
              marginLeft: 28,
              fontSize: '1.3rem',
              fontWeight: 600,
            }}
          >
            Frontend Mentor{' '}
          </Typography>
          <div>
            <Hamburger
              size={38}
              color="red"
              // toggled={isOpen}
              // toggle={() => setOpen((prev: any) => !prev)}
              // aria-label="open the menu"
              // aria-expanded={isOpen}
              // aria-controls="menu"
            />
          </div>
          <Typography
            style={{
              position: 'absolute',
              color: 'hsl(231, 100%, 97%)',
              top: 45,
              marginLeft: 30,
              fontSize: '0.9rem',
            }}
          >
            Feedback Board
          </Typography>
          {/* </Stack> */}
          {/* <div>
            <Hamburger
              size={38}
              color="red"
              // toggled={isOpen}
              // toggle={() => setOpen((prev: any) => !prev)}
              // aria-label="open the menu"
              // aria-expanded={isOpen}
              // aria-controls="menu"
            />
          </div> */}
          {/* </Stack> */}
        </Card>
      </AppBar>
    </Box>
  );
};

export default MobileHeader;
