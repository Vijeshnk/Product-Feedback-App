import React from 'react';
import { render } from '@testing-library/react';
import { BasicStyledchip } from './styledchip.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicStyledchip />);
  const rendered = getByText('primary');
  expect(rendered).toBeTruthy();
});
