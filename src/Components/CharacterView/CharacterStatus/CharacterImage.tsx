import React from 'react';

interface CharacterImageProps {
  serverId: string | null;
  characterId: string | null;
}
function CharacterImage({ serverId, characterId }: CharacterImageProps) {
  return (
    <div className="flex justify-center">
      <img src={`https://dnf-react-typescript.herokuapp.com/character/characterImage?serverId=${serverId}&characterId=${characterId}?zoom=1`} alt="img" />
    </div>
  );
}

export default CharacterImage;
