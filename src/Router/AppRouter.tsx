import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeMain from '../Pages/HomeMain';
import Test from '../Pages/Test';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMain />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
