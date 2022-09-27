import React from 'react';
import EventBannerContainer from '../../../DesignPattern/EvemtBanner/EventBannerContainer';
import CharacterSearchForm from '../../../DesignPattern/SearchForm/CharacterSearchForm';
import CharacterSearchMainContainer from '../CharacterSearchMainContainer';
import CharacterCardContainer from './CharacterCardContainer';
import CharacterCardList from './CharacterCardList';
import { CharacterSimpleData } from './../../Types/Character/CharacterType';
import VerticalAdBanner from '../../../DesignPattern/AdBanner/VerticalAdBanner';

interface CharacterSimpleDataListProps {
  CharacterSimpleDataList: CharacterSimpleData[];
}
function CharacterSearchBody({ CharacterSimpleDataList }: CharacterSimpleDataListProps) {
  console.log(CharacterSimpleDataList);

  return (
    <div className="w-Container relative m-auto">
      <p className="text-center mt-common text-4xl font-bold">캐릭터 검색</p>

      <CharacterSearchForm />
      <EventBannerContainer />
      <div className="w-Container min-h-[500px] relative">
        <VerticalAdBanner />
        {CharacterSimpleDataList.length !== 0 ? <CharacterCardList CharacterSimpleDataList={CharacterSimpleDataList} /> : <div>검색값이 없습니다.</div>}
      </div>
    </div>
  );
}

export default CharacterSearchBody;
