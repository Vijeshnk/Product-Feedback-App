import React from 'react';
import { render } from '@testing-library/react';
import { BasicFeedbackboard } from './feedbackboard.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicFeedbackboard />);
  const rendered = getByText(/Frontend Mentor/i);
  expect(rendered).toBeTruthy();
});
