import React from 'react';
import EventBannerContainer from '../../../DesignPattern/EvemtBanner/EventBannerContainer';
import CharacterSearchForm from '../../../DesignPattern/SearchForm/CharacterSearchForm';
import CharacterSearchNull from '../../../asset/images/nocharacter.png';
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
      <div className="w-Container min-h-[450px] relative">
        <VerticalAdBanner />
        {CharacterSimpleDataList.length !== 0 ? (
          <CharacterCardList CharacterSimpleDataList={CharacterSimpleDataList} />
        ) : (
          <div className="h-[250px] flex justify-center items-center">
            <img src={CharacterSearchNull} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default CharacterSearchBody;
