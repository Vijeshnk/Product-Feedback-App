import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ProductFeedbackAppApp } from './app';

ReactDOM.render((
  <BrowserRouter>
    <ProductFeedbackAppApp />
  </BrowserRouter>
), document.getElementById('root'));

