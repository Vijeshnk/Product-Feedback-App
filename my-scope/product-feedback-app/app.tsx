import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EditFeedback from './pages/EditFeedback';
import Home from './pages/Home';

export function ProductFeedbackAppApp() {
  return (
    <>
      {/* header component */}
      <Routes>
        <Route path="/" element={<Home />}>
          {/* home page component */}
        </Route>

        <Route path="/edit_page" element={<EditFeedback/>}>{/* about page component */}</Route>
      </Routes>
      {/* footer component */}
    </>
  );
}
