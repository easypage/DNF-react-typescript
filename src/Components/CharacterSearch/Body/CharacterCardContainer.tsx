import axios from 'axios';
import React, { useEffect, useState } from 'react';
import VerticalAdBanner from '../../../DesignPattern/AdBanner/VerticalAdBanner';
import { CharacterSimpleData } from '../../Types/Character/CharacterType';

import CharacterCardList from './CharacterCardList';

function CharacterCardContainer() {
  const params = new URLSearchParams(window.location.search);
  const characterName = params.get('nickname');
  const [CharacterSimpleDataList, setCharacterSimpleDataList] = useState<CharacterSimpleData[]>([]);

  useEffect(() => {
    axios.get(`https://dnf-react-typescript.herokuapp.com/character/nickname?nickname=${characterName}`).then(characterData => {
      setCharacterSimpleDataList(characterData.data.rows);
    });
  }, []);
  return (
    <div className="relative ">
      <VerticalAdBanner />
      {characterName === null ? <div>asdsad</div> : <CharacterCardList CharacterSimpleDataList={CharacterSimpleDataList} />}
    </div>
  );
}
export default CharacterCardContainer;
