import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import CharacterCard from '../Components/CharacterCard/CharacterDataCall';
import CharacterDetailDataContainer from '../Components/CharacterDetailView/CharacterDetailData';

import HomeMain from '../Pages/HomeMain';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMain />}></Route>
        <Route path="/charSearch" element={<CharacterCard />}></Route>
        <Route path="/CharView" element={<CharacterDetailDataContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
