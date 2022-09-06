import React, { useEffect } from 'react';

function CharSearchData() {
  const params = new URLSearchParams(window.location.search);
  // let serverName = params.get('serverId');
  const characterName = params.get('nickname');
  let loop = '';
  console.log(characterName);

  useEffect(() => {
    if (loop !== '1') {
      axios.post('https://dnf-redirect.herokuapp.com', body).then(result => {
        setcharData(result.data);
        loop = '1';
      });
    }
  }, []);
  return <div></div>;
}

export default CharSearchData;
