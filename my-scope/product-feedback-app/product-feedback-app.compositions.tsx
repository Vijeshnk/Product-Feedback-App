import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ProductFeedbackAppApp } from './app';

export const ProductFeedbackAppBasic = () => {
  return (
    <MemoryRouter>
      <ProductFeedbackAppApp />
    </MemoryRouter>
  );
};
