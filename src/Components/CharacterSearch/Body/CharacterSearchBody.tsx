import React from 'react';
import EventBannerContainer from '../../../DesignPattern/EvemtBanner/EventBannerContainer';
import CharacterSearchForm from '../../../DesignPattern/SearchForm/CharacterSearchForm';
import CharacterCardContainer from './CharacterCardContainer';

function CharacterSearchBody() {
  return (
    <div className="w-Container m-auto">
      <p className="text-center mt-common text-4xl font-bold">캐릭터 검색</p>
      <CharacterSearchForm />
      <EventBannerContainer />
      <CharacterCardContainer />
    </div>
  );
}

export default CharacterSearchBody;
