import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dropdownnavbar } from '@product_feedback/scope.navbar.dropdownnavbar';

export function ProductFeedbackAppApp() {
  return (
    <>
      {/* header component */}
      {/* <Dropdownnavbar /> */}
      <Routes>
        <Route path="/" element={<Dropdownnavbar />}>
          {/* home page component */}
        </Route>

        <Route path="/about">{/* about page component */}</Route>
      </Routes>
      {/* footer component */}
    </>
  );
}
