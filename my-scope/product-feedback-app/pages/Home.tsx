import { Dropdownnavbar } from '@product_feedback/scope.navbar.dropdownnavbar';
import { Feedbackboard } from '@product_feedback/scope.cards.feedbackboard';
import { Roadmap } from '@product_feedback/scope.cards.roadmap';
import React from 'react';
import { Stack, useMediaQuery, useTheme } from '@mui/material';
import ChipGroup from '../components/ChipGroup';
import TagCardComponent from '../components/TagCardComponent';
import { Container } from '@mui/material';

type Props = {};

const Home = (props: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
};

export default Home;
