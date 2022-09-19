import React from 'react';
import HorizenAdBanner from '../../DesignPattern/AdBanner/VerticalAdBanner';
import EventBanner from '../../DesignPattern/EvemtBanner/EventBanner';
import EventBannerContainer from '../../DesignPattern/EvemtBanner/EventBannerContainer';
import Footer from '../../DesignPattern/Footer';
import Header from '../../DesignPattern/Header/Header';
import SearchForm from '../Home/Body/HomeCharacterSearchForm';
import CharacterCardData from './CharacterCardData';

function CharacterCardContainer() {
  return (
    <div className="w-Container relative m-auto">
      <p className="text-4xl text-black font-bold mt-common text-center">캐릭터 검색</p>
      <SearchForm />
      <EventBannerContainer />
      <CharacterCardData />
    </div>
  );
}

export default CharacterCardContainer;
