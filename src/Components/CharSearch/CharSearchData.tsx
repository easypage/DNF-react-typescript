import React, { useEffect, useState } from 'react';
import CharSearch from './CharSearch';

<<<<<<< HEAD
function CharSearchData() {
  const params = new URLSearchParams(window.location.search);
  const characterName = params.get('nickname');
  let loop = '';
  const [characterSearchData, setCharacterSearchData] = useState([]);
=======
export type UserType = {
  serverId: string;
  characterId: string;
  characterName: string;
  level: number;
  jobName: string;
  jobGrowName: string;
};
//7ingout.tistory.com/212 [Hello, 7ingout world!:티스토리]
function CharSearchData() {
  const params = new URLSearchParams(window.location.search);
  const characterName = params.get('nickname');
  const loop = '';
  const [characterSearchData, setCharacterSearchData] = useState<UserType[]>([]);
>>>>>>> 928f0ec933a2a7ee8983491cfedbb63a335286e7

  useEffect(() => {
    // if (loop !== '1') {
    //   axios.get(`https://dnf-react-typescript.herokuapp.com/character/nickname?nickname=${characterName}`).then(result => {
    //     setCharacterSearchData(result.data.rows);
    //     loop = '1';
    //   });
    // }
  }, []);
<<<<<<< HEAD

  return <div>{characterSearchData.map(charData => (console.log(charData), (<CharSearch key={charData} data={charData} />)))}</div>;
=======
  console.log(characterSearchData);
  return (
    <div>
      {/* {characterSearchData.map(tr => (
        // <CharSearch key={tr.characterId} />
      ))} */}
    </div>
  );
>>>>>>> 928f0ec933a2a7ee8983491cfedbb63a335286e7
}

export default CharSearchData;
