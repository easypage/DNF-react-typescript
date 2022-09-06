import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import CharSearch from '../Components/CharSearch/CharSearch';
import CharSearchData from '../Components/CharSearch/CharSearchData';
import HomeMain from '../Pages/HomeMain';
import Test from '../Pages/Test';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMain />}></Route>
        <Route path="/charSearch" element={<CharSearchData />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
