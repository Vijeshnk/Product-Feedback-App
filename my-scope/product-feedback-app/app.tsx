import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

export function ProductFeedbackAppApp() {
  return (
    <>
      {/* header component */}
      <Routes>
        <Route path="/" element={<Home />}>
          {/* home page component */}
        </Route>

        <Route path="/about">{/* about page component */}</Route>
      </Routes>
      {/* footer component */}
    </>
  );
}
