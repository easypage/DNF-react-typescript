import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeMain from '../Pages/HomeMain';
import Test from '../Pages/Test';
import CharSearch from '../Components/CharSearch/CharSearch';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMain />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/charSearch" element={<CharSearch />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
