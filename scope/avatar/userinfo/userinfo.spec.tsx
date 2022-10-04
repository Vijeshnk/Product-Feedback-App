import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicUserinfo } from './userinfo.composition';

it('should render with the correct text', () => {
  render(<BasicUserinfo />);
  const name = screen.getByText('Christiana Rodger');
  const username = screen.getByText('@christiana.rodger');
  expect(name).toBeTruthy();
  expect(username).toBeTruthy();
});
