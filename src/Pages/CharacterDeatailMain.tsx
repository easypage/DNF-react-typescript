import React from 'react';
import CharacterDetailContainer from '../Components/CharacterDetailView/CharacterDetailContainer';
import Footer from '../DesignPattern/Footer';
import Header from '../DesignPattern/Header/Header';

function CharacterDeatailMain() {
  return (
    <div>
      <Header />
      <CharacterDetailContainer />
      <Footer />
    </div>
  );
}

export default CharacterDeatailMain;
