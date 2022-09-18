import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharacterDeatailMain from '../Pages/CharacterDeatailMain';
import CharacterMain from '../Pages/CharacterMain';

import HomeMain from '../Pages/HomeMain';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMain />}></Route>
        <Route path="/charSearch" element={<CharacterMain />}></Route>
        <Route path="/charView" element={<CharacterDeatailMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
