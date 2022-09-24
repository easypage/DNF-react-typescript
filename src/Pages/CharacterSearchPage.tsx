import React from 'react';
import CharacterSearchBody from '../Components/CharacterSearch/Body/CharacterSearchBody';
import CharacterSearchFooter from '../Components/CharacterSearch/Footer/CharacterSearchFooter';
import CharacterSearchHeader from '../Components/CharacterSearch/Header/CharacterSearchHeader';
function CharacterSearchPage() {
  return (
    <div>
      <CharacterSearchHeader />
      <CharacterSearchBody />
      <CharacterSearchFooter />
    </div>
  );
}

export default CharacterSearchPage;
