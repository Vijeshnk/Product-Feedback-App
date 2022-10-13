import { Dropdownnavbar } from '@product_feedback/scope.navbar.dropdownnavbar';
import { Feedbackboard } from '@product_feedback/scope.cards.feedbackboard';
import { Roadmap } from '@product_feedback/scope.cards.roadmap';
import React, { useContext } from 'react';
import { Stack, useMediaQuery, useTheme } from '@mui/material';
import ChipGroup from '../components/ChipGroup';
import TagCardComponent from '../components/TagCardComponent';
import { Container } from '@mui/material';
import MobileHeader from '../components/MobileHeader';

type Props = {};

const Home = (props: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const MediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Container>
        {!MediumScreen && (
          <Stack direction="row" sx={{ mb: '10px' }}>
            <Stack direction="column">
              {!matches && <Feedbackboard />}
              {!matches && <ChipGroup />}
              {!matches && <Roadmap />}
            </Stack>
            <Stack direction="column">
              <Dropdownnavbar />
              <TagCardComponent />
            </Stack>
          </Stack>
        )}
        {MediumScreen && (
          <Stack direction="column" sx={{ mb: '10px' }}>
            <Stack direction="row">
              {!matches && <Feedbackboard />}
              {!matches && <ChipGroup />}
              {!matches && <Roadmap />}
            </Stack>
            <Stack direction="column">
              {matches && <MobileHeader />}
              <Dropdownnavbar />
              <TagCardComponent />
            </Stack>
          </Stack>
        )}
      </Container>
    </>
  );
};

export default Home;
