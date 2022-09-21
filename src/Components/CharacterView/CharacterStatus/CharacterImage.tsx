import React from 'react';

interface CharacterImageProps {
  serverId: string | null;
  characterId: string | null;
}
function CharacterImage({ serverId, characterId }: CharacterImageProps) {
  return (
    <div>
      <img src={`https://dnf-react-typescript.herokuapp.com/character/characterImage?serverId=${serverId}&characterId=${characterId}?zoom=1`} alt="img" className="m-auto" />
    </div>
  );
}

export default CharacterImage;
