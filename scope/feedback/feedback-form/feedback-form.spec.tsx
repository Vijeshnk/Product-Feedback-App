import React from 'react';
import { render } from '@testing-library/react';
import { BasicFeedbackForm } from './feedback-form.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicFeedbackForm />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
