import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicComment } from './comment.composition';

it('should render with the correct text', () => {
  render(<BasicComment />);
  const rendered = screen.getByPlaceholderText('Type your comment here');
  expect(rendered).toBeTruthy();
});
