import { Dropdownnavbar } from '@product_feedback/scope.navbar.dropdownnavbar';
import { Feedbackboard } from '@product_feedback/scope.cards.feedbackboard';
import { Roadmap } from '@product_feedback/scope.cards.roadmap';
import React from 'react';
import { Stack } from '@mui/material';
import ChipGroup from '../components/ChipGroup';
import TagCardComponent from '../components/TagCardComponent';

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Stack direction="row" sx={{ mb: '10px' }}>
        <Stack direction="column">
          <Feedbackboard />
          <ChipGroup />
          <Roadmap />
        </Stack>
        <Stack direction="column">
          <Dropdownnavbar />
          <TagCardComponent />
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
