import React from 'react';
import CharacterCardContainer from '../Components/CharacterCard/CharacterCardContainer';
import Footer from '../DesignPattern/Footer';
import Header from '../DesignPattern/Header/Header';
function CharacterMain() {
  return (
    <div className="asds">
      <Header />
      <CharacterCardContainer />
      <Footer />
    </div>
  );
}

export default CharacterMain;
