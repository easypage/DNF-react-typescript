import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuctionPage from '../Pages/AuctionPage';
import CharacterDeatailPage from '../Pages/CharacterDeatailPage';
import CharacterSearchPage from '../Pages/CharacterSearchPage';

import HomeMain from '../Pages/HomeMain';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMain />}></Route>
        <Route path="/characterSearch" element={<CharacterSearchPage />}></Route>
        <Route path="/characterView" element={<CharacterDeatailPage />} />
        <Route path="/auction" element={<AuctionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
