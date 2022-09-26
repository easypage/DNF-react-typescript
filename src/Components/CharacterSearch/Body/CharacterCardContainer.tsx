import axios from 'axios';
import React, { useEffect, useState } from 'react';
import VerticalAdBanner from '../../../DesignPattern/AdBanner/VerticalAdBanner';
import { CharacterSimpleData } from '../../Types/Character/CharacterType';
import CharacterMenu from '../../../asset/images/nocharacter.png';
import CharacterCardList from './CharacterCardList';

function CharacterCardContainer() {
  const params = new URLSearchParams(window.location.search);
  const characterName = params.get('nickname');
  const [CharacterSimpleDataList, setCharacterSimpleDataList] = useState<CharacterSimpleData[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`https://dnf-react-typescript.herokuapp.com/character/nickname?nickname=${characterName}`).then(characterData => {
      setCharacterSimpleDataList(characterData.data.rows);
      setLoading(false);
    });
  }, []);
  return (
    <div className="relative ">
      <VerticalAdBanner />
      {characterName === null ? (
        <div className="flex justify-center text-2xl">
          <img src={CharacterMenu} alt="image" />
        </div>
      ) : (
        <CharacterCardList CharacterSimpleDataList={CharacterSimpleDataList} loading={loading} />
      )}
    </div>
  );
}
export default CharacterCardContainer;
