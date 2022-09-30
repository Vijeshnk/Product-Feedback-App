import React from 'react';
import { render } from '@testing-library/react';
import { BasicRoadmap } from './roadmap.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicRoadmap />);
  const rendered = getByText(/Roadmap/i);
  expect(rendered).toBeTruthy();
});
