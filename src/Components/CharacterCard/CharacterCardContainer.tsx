import React from 'react';
import Footer from '../../DesignPattern/Footer';
import Header from '../../DesignPattern/Header/Header';
import CharacterCardData from './CharacterCardData';

function CharacterCardContainer() {
  return (
    <div className="w-Container m-auto ">
      <CharacterCardData />
    </div>
  );
}

export default CharacterCardContainer;
