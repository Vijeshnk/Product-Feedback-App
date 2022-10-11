import {
  AppBar,
  Box,
  Card,
  CardMedia,
  Drawer,
  Stack,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Roadmap } from '@product_feedback/scope.cards.roadmap';
import { Twirl as Hamburger } from 'hamburger-react';
import React, { useState } from 'react';
import ChipGroup from './ChipGroup';

type Props = {};

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  paper: {
    background: 'hsl(231, 100%, 97%)',
  },
});

const MobileHeader = (props: Props) => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  const sideList = (
    <div>
      <Roadmap />
      <ChipGroup />
    </div>
  );
  return (
    <>
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
          <Drawer
            open={isOpen}
            anchor="right"
            classes={{ paper: classes.paper }}
            onClose={() => setOpen((prev: any) => !prev)}
            PaperProps={{
              sx: { width: '60%' },
            }}
          >
            <div style={{ marginLeft: 33 }}>{sideList}</div>
          </Drawer>
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
        </AppBar>
      </Box>
    </>
  );
};

export default MobileHeader;
