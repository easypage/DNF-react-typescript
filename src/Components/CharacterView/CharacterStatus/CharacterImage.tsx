import React from 'react';
import ListContainer from '../../../DesignPattern/CharacterDetailList/ListContainer';

interface CharacterImageProps {
  serverId: string | null;
  characterId: string | null;
}
function CharacterImage({ serverId, characterId }: CharacterImageProps) {
  return (
    <div className="">
      <img src={`https://dnf-react-typescript.herokuapp.com/character/characterImage?serverId=${serverId}&characterId=${characterId}?zoom=1`} alt="img" />
    </div>
  );
}

export default CharacterImage;
