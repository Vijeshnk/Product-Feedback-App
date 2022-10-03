import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicCommenticon } from './commenticon.composition';

it('should render with the correct text', () => {
  render(<BasicCommenticon />);
  const rendered = screen.getByText('4');
  expect(rendered).toBeTruthy();
});
