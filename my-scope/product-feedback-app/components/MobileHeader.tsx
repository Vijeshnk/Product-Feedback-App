import {
  AppBar,
  Box,
  Card,
  CardMedia,
  Drawer,
  Stack,
  Typography,
} from '@mui/material';
import { Roadmap } from '@product_feedback/scope.cards.roadmap';
import { Twirl as Hamburger } from 'hamburger-react';
import React, { useState } from 'react';
import ChipGroup from './ChipGroup';

type Props = {};

const MobileHeader = (props: Props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute">
        <div style={{ position: 'absolute', right: '7%', top: '20%' }}>
          <Hamburger
            size={30}
            color="white"
            direction="left"
            toggled={isOpen}
            toggle={() => setOpen((prev: any) => !prev)}
            aria-label="open the menu"
            aria-expanded={isOpen}
            aria-controls="menu"
          />
        </div>
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

          <Stack>
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

            <Typography
              style={{
                position: 'absolute',
                color: 'hsl(231, 100%, 97%)',
                top: 45,
                marginLeft: 30,
                fontSize: '0.9rem',
              }}
            >
              Feedback Board{' '}
            </Typography>
          </Stack>
        </Card>
        <Drawer
          open={isOpen}
          anchor="right"
          color="hsl(231, 100%, 97%)"
          onClose={() => setOpen((prev: any) => !prev)}
          sx={{ marginRight: 30 }}
        >
          <Stack direction="column">
            <ChipGroup />
            <Roadmap />
          </Stack>
        </Drawer>
      </AppBar>
    </Box>
  );
};

export default MobileHeader;
