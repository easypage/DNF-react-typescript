import React from 'react';
import HorizenAdBanner from '../../DesignPattern/AdBanner/HorizenAdBanner';
import EventBanner from '../../DesignPattern/EvemtBanner/EventBanner';
import EventBannerContainer from '../../DesignPattern/EvemtBanner/EventBannerContainer';
import Footer from '../../DesignPattern/Footer';
import Header from '../../DesignPattern/Header/Header';
import SearchForm from '../Home/Body/HomeCharacterSearchForm';
import CharacterCardData from './CharacterCardData';

function CharacterCardContainer() {
  return (
    <div className="w-Container relative m-auto">
      캐릭터 검색
      <SearchForm />
      <EventBannerContainer />
      <CharacterCardData />
    </div>
  );
}

export default CharacterCardContainer;
