import React from 'react';

import BodyLogo from './../../../asset/images/mainlogo.png';
import CharacterSearchForm from './../../../DesignPattern/SearchForm/CharacterSearchForm';

function HomeBody() {
  return (
    <div className="w-Container flex flex-col relative items-center m-auto h-[650px]">
      <img src={BodyLogo} className="mt-common" alt="mainlogo" />
      <CharacterSearchForm />
    </div>
  );
}

export default HomeBody;
