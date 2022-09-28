import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CharacterSimpleData } from '../Types/Character/CharacterType';
import CharacterSearchBody from './Body/CharacterSearchBody';
import CharacterSearchFooter from './Footer/CharacterSearchFooter';
import CharacterSearchHeader from './Header/CharacterSearchHeader';
import LoadingBar from './../../DesignPattern/Loding/LoadingBar';

//캐릭터 카드 컨테이너 작업
function CharacterSearchMainContainer() {
  const params = new URLSearchParams(window.location.search);
  const characterName = params.get('nickname') === null ? '' : params.get('nickname');
  const [CharacterSimpleDataList, setCharacterSimpleDataList] = useState<CharacterSimpleData[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://dnf-react-typescript.herokuapp.com/character/nickname?nickname=${characterName}`)
      .then(characterData => {
        setCharacterSimpleDataList(characterData.data.rows);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  }, []);
  console.log(characterName);

  //헤더 푸터 바디 작성
  return loading ? (
    <LoadingBar />
  ) : (
    <div>
      <CharacterSearchHeader />
      <CharacterSearchBody CharacterSimpleDataList={CharacterSimpleDataList} />
      <CharacterSearchFooter />
    </div>
  );
}

export default CharacterSearchMainContainer;
