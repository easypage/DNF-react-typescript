import React from 'react';
import { CharacterDetailData } from '../../Types/Character/CharacterDetailType';
import '../../../css/CharacterViewBanner.css';
interface CharacterProps {
  characterInfomationData: CharacterDetailData | undefined;
  serverId: string | null;
  characterId: string | null;
}
function CharacterDetailBannerContent({ characterInfomationData, serverId, characterId }: CharacterProps) {
  return (
    <div className={`w-full  h-60 flex justify-center text-white  overflow-hidden ` + serverId}>
      <div className="w-Container h-full bg-transparent relative flex items-center">
        <div className=" flex flex-col justify-items-start ">
          <div>
            <p className="text-3xl font-bold">{characterInfomationData?.characterName}</p>
            <div className="text-lg mt-2 font-bold flex items-baseline  text-gray-300">
              레벨 <p className=" text-base  ml-2 ">{characterInfomationData?.level}</p>
            </div>
            <div className="text-lg mt-2 font-bold flex items-baseline  text-gray-300">
              각성명 <p className=" text-base  ml-2 ">{characterInfomationData?.jobGrowName}</p>
            </div>

            <div className="text-lg mt-2 font-bold flex items-baseline  text-gray-300">
              모험단 <p className=" text-base  ml-2 "> {characterInfomationData?.adventureName}</p>
            </div>
            <div className="text-lg mt-2 font-bold flex items-baseline  text-gray-300">
              길드 <p className=" text-base  ml-2 "> {characterInfomationData?.guildName}</p>
            </div>
          </div>
          <img
            className="absolute right-CharacterDetailBannerImageRight top-CharacterDetailBannerImageTop"
            src={`https://dnf-react-typescript.herokuapp.com/character/characterImage?serverId=${serverId}&characterId=${characterId}?zoom=2`}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}

export default CharacterDetailBannerContent;
