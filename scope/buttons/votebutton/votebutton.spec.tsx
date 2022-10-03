import React from 'react';
import { render } from '@testing-library/react';
import { BasicVotebutton } from './votebutton.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicVotebutton />);
  const rendered = getByText('44');
  expect(rendered).toBeTruthy();
});
