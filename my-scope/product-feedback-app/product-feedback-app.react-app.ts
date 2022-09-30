import { ReactAppOptions } from '@teambit/react';

export const ProductFeedbackAppApp: ReactAppOptions = {
  name: 'product-feedback-app',
  entry: [require.resolve('./product-feedback-app.app-root')],
  prerender: {
    routes: ['/']
  }
};

export default ProductFeedbackAppApp;
