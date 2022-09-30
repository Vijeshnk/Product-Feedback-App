import React from 'react';
import { render } from '@testing-library/react';
import { BasicDropdownnavbar } from './dropdownnavbar.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicDropdownnavbar />);

});
