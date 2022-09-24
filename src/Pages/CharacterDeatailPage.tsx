import React from 'react';
import CharacterDetailBody from '../Components/CharacterView/Body/CharacterDetailBody';
import CharacterDetailFooter from '../Components/CharacterView/Footer/CharacterDetailFooter';
import CharacterDetailHeader from '../Components/CharacterView/Header/CharacterDetailHeader';

function CharacterDeatailPage() {
  return (
    <div>
      <CharacterDetailHeader />
      <CharacterDetailBody />
      <CharacterDetailFooter />
    </div>
  );
}

export default CharacterDeatailPage;
