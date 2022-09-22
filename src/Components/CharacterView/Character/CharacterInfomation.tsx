import React from 'react';
import ListContainer from '../../../DesignPattern/CharacterDetailList/ListContainer';
import { CharacterDetailData } from '../../Types/Character/CharacterDetailType';
import CharacterStatusContainer from '../CharacterStatus/CharacterStatusContainer';

interface CharacterProps {
  characterInfomationData: CharacterDetailData | undefined;
  serverId: string | null;
  characterId: string | null;
}
function CharacterInfomation({ characterInfomationData, serverId, characterId }: CharacterProps) {
  return (
    <div className="w-full  h-60 flex justify-center bg-slate-100 overflow-hidden">
      <div className="w-Container h-full bg-red-300 relative flex items-center">
        <div className=" flex flex-col justify-items-start ">
          <p className="text-3xl font-bold">{characterInfomationData?.characterName}</p>
          <p className="text-base mt-2">모험단 {characterInfomationData?.adventureName}</p>
          <p className="text-base mt-2">길드 {characterInfomationData?.guildName}</p>
          <p className="text-base mt-2">각성명 {characterInfomationData?.jobGrowName}</p>
          <p className="text-base mt-2">레벨 {characterInfomationData?.level}</p>
        </div>
        <img
          className="absolute right-CharacterDetailBannerImageRight top-CharacterDetailBannerImage "
          src={`https://dnf-react-typescript.herokuapp.com/character/characterImage?serverId=${serverId}&characterId=${characterId}?zoom=2`}
          alt="img"
        />
      </div>
    </div>
  );
}

export default CharacterInfomation;
