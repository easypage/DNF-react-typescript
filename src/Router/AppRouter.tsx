import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharacterCardContainer from '../Components/CharacterCard/CharacterCardContainer';
import CharacterMain from '../Pages/CharacterMain';

import HomeMain from '../Pages/HomeMain';
import CharacterDetailDataContainer from './../Components/CharacterDetailView/CharacterDetailData';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMain />}></Route>
        <Route path="/charSearch" element={<CharacterMain />}></Route>
        <Route path="/CharView" element={<CharacterDetailDataContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
