import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharSearch from '../Components/CharSearch/CharSearch';
import CharSearchData from '../Components/CharSearch/CharSearchData';
import CharView from '../Components/CharView/CharView';
import CharViewData from '../Components/CharView/CharViewData';
import HomeMain from '../Pages/HomeMain';
import Test from '../Pages/Test';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMain />}></Route>
        <Route path="/charSearch" element={<CharSearchData />}></Route>
        <Route path="/CharView" element={<CharViewData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
