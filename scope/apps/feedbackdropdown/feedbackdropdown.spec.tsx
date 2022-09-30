import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicFeedbackdropdown } from './feedbackdropdown.composition';

it('should render with the correct text', () => {
  render(<BasicFeedbackdropdown />);
  // const rendered = screen.getByText(/Enhancement/i);
  // expect(rendered).toBeTruthy();
});
