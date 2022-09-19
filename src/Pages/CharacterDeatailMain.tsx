import React from 'react';
import CharacterDetailBody from '../Components/CharacterView/Body/CharacterViewBody';
import Footer from '../DesignPattern/Footer';
import Header from '../DesignPattern/Header/Header';

function CharacterDeatailMain() {
  return (
    <div>
      <Header />
      <CharacterDetailBody />
      <Footer />
    </div>
  );
}

export default CharacterDeatailMain;
