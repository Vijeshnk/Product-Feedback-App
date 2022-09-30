import React from 'react';
import { render } from '@testing-library/react';
import { BasicAppbutton } from './appbutton.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAppbutton />);
  const rendered = getByText('Button');
  expect(rendered).toBeTruthy();
});
