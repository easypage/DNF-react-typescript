import React from 'react';
import CharacterCardContainer from '../Components/CharacterCard/CharacterCardContainer';
import CharacterCardHeader from '../Components/CharacterCard/CharacterCardHeader';
import Footer from '../DesignPattern/Footer';
import Header from '../DesignPattern/Header/Header';
function CharacterMain() {
  return (
    <div>
      <CharacterCardHeader />
      <CharacterCardContainer />
      <Footer />
    </div>
  );
}

export default CharacterMain;
