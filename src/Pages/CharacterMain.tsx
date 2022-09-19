import React from 'react';
import CharacterSearchBody from '../Components/CharacterSearch/Body/CharacterSearchBody';
import CharacterSearchFooter from './../Components/CharacterSearch/Footer/CharacterSearchFooter';
import CharacterSearchHeader from './../Components/CharacterSearch/Header/CharacterSearchHeader';
function CharacterMain() {
  return (
    <div>
      <CharacterSearchHeader />
      <CharacterSearchBody />
      <CharacterSearchFooter />
    </div>
  );
}

export default CharacterMain;
