import React from 'react';
import CharacterDetailBodyContainer from '../Components/CharacterView/Body/CharacterDetailBodyContainer';
import CharacterStatusContainer from '../Components/CharacterView/CharacterStatus/CharacterStatusContainer';
import Footer from '../DesignPattern/Footer';
import Header from '../DesignPattern/Header/Header';

function CharacterDeatailMain() {
  return (
    <div>
      <Header />
      <CharacterDetailBodyContainer />
      <Footer />
    </div>
  );
}

export default CharacterDeatailMain;
