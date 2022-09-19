import React from 'react';
import EventBannerContainer from '../../../DesignPattern/EvemtBanner/EventBannerContainer';
import CharacterSearchForm from '../../../DesignPattern/SearchForm/CharacterSearchForm';
import CharacterCardData from './CharacterCardData';

function CharacterSearchBody() {
  return (
    <div className="w-Container m-auto">
      <CharacterSearchForm />
      <EventBannerContainer />
      <CharacterCardData />
    </div>
  );
}

export default CharacterSearchBody;
